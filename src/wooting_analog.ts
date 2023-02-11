import { HidEvent } from './types'

const ffi = require('ffi-napi')
const ref = require('ref-napi')
const Struct = require('ref-struct-napi')
var ArrayType = require('ref-array-napi')

const DeviceInfo = Struct({
  vendor_id: 'ushort',
  product_id: 'ushort',
  manufacturer_name: 'string',
  device_name: 'string',
  device_id: 'ulong',
  device_type: 'ushort'
})
const DevicePointer = ref.refType(DeviceInfo)

const pvoid = ref.refType(ref.types.void)
const PVoidArray = ArrayType(pvoid)

// Define the functions from the rgb sdk
// @ts-ignore
const wootingAnalogLib = ffi.Library('./libs/libwooting_analog_wrapper.dylib', {
  "wooting_analog_initialise": ['int', []],
  "wooting_analog_is_initialised": ['bool', []],
  "wooting_analog_get_connected_devices_info": ['int', [PVoidArray, 'int']],
  "wooting_analog_read_full_buffer_device": ['int', ['ushort *', 'long *', 'int', 'ulong']]
});

const BUFFER_SIZE = 10
const UPDATE_INTERVAL = 1
const PRESS_THRESHOLD = 0.15


export default () => {

  let analogBufferInterval

  const connect = (mapper: (hidList: HidEvent[]) => void) => {

    wootingAnalogLib.wooting_analog_initialise();
    const deviceBuffer = new PVoidArray(BUFFER_SIZE)
    const result = wootingAnalogLib.wooting_analog_get_connected_devices_info(deviceBuffer, BUFFER_SIZE)
    let device_id, codeBuffer, analogBuffer, pressedKeys

    if (result > 0) {
      console.log('connected to keyboard analog')
      device_id = ref.get(deviceBuffer.buffer, 0, DevicePointer).deref().device_id
      codeBuffer = new Uint16Array(BUFFER_SIZE)
      analogBuffer = new Float32Array(BUFFER_SIZE)
      pressedKeys = {}
    } else {
      console.log('analog sdk cannot connect')
    }

    analogBufferInterval = setInterval(() => {
      [codeBuffer, analogBuffer] = updateBuffers(codeBuffer, analogBuffer, pressedKeys, device_id, mapper)
    }, UPDATE_INTERVAL)
  }

  const disconnect = () => {
    if (analogBufferInterval) {
      clearInterval(analogBufferInterval)
    }
  }

  const updateBuffers = (codeBuffer, analogBuffer, pressedKeys, device_id, mapper) => {
    const newCodeBuffer = new Uint16Array(BUFFER_SIZE)
    const newAnalogBuffer = new Float32Array(BUFFER_SIZE)

    let updated = false

    wootingAnalogLib.wooting_analog_read_full_buffer_device(newCodeBuffer, newAnalogBuffer, BUFFER_SIZE, device_id);
    if (newCodeBuffer.toString() != codeBuffer.toString() || newAnalogBuffer.toString() != analogBuffer.toString()) {
      const hidList = []
      newCodeBuffer.forEach((code, i) => {
        if(code > 0) {
          if(!pressedKeys[code]){
            pressedKeys[code] = {ramp: 0, pressed: false}
          }
          //press has passed the threshold, send note on
          if(!pressedKeys[code].pressed && newAnalogBuffer[i] >= PRESS_THRESHOLD){
            // let velocity = Math.floor((newAnalogBuffer[i]^0.3)*127-pressedKeys[code].ramp*5)
            let velocity = Math.floor(Math.pow(newAnalogBuffer[i],0.3)*127)
            if(velocity < 0) velocity = 1
            console.log(velocity)
            hidList.push({ hid_id: code, velocity, pressed: true })
            pressedKeys[code].pressed = true
            pressedKeys[code].ramp = 0
            console.log('press')
          }
          //press has returned from the threshold, send note off
          else if(pressedKeys[code].pressed && newAnalogBuffer[i] < PRESS_THRESHOLD){
            hidList.push({ hid_id: code, velocity: 0, pressed: false })
            pressedKeys[code].pressed = false
            pressedKeys[code].ramp = 0
            console.log('release')
          }
          //press has not yet passed the threshold, increment ramp
          // else if(!pressedKeys[code].pressed && newAnalogBuffer[i] < PRESS_THRESHOLD){
          //   pressedKeys[code].ramp = pressedKeys[code].ramp+UPDATE_INTERVAL
          //   console.log('ramp')
          // }
        }
      });
      codeBuffer.forEach(code => {
        if (code > 0 && !newCodeBuffer.includes(code)) {
          if(pressedKeys[code].pressed){
            hidList.push({ hid_id: code, velocity: 0, pressed: false })
            console.log('release')
          }
          pressedKeys[code].pressed = false
          pressedKeys[code].ramp = 0
        }
      });
      mapper(hidList)
      codeBuffer = newCodeBuffer;
      analogBuffer = newAnalogBuffer;
    }
    return [codeBuffer, analogBuffer,]
  }

  return {
    connect,
    disconnect
  }

}