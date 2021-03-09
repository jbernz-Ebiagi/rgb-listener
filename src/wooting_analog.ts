import { HidEvent } from './types'

const ffi = require('ffi')
const ref = require('ref')
const Struct = require('ref-struct')
var ArrayType = require('ref-array')

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


export default () => {

  let analogBufferInterval

  const connect = (mapper: (hidList: HidEvent[]) => void) => {

    wootingAnalogLib.wooting_analog_initialise();
    const deviceBuffer = new PVoidArray(BUFFER_SIZE)
    const result = wootingAnalogLib.wooting_analog_get_connected_devices_info(deviceBuffer, BUFFER_SIZE)
    let device_id, codeBuffer, analogBuffer

    if (result > 0) {
      console.log('connected to keyboard analog')
      device_id = ref.get(deviceBuffer.buffer, 0, DevicePointer).deref().device_id
      codeBuffer = new Uint16Array(BUFFER_SIZE)
      analogBuffer = new Float32Array(BUFFER_SIZE)
    } else {
      console.log('analog sdk cannot connect')
    }

    analogBufferInterval = setInterval(() => {
      [codeBuffer, analogBuffer] = updateBuffers(codeBuffer, analogBuffer, device_id, mapper)
    }, UPDATE_INTERVAL)
  }

  const disconnect = () => {
    if (analogBufferInterval) {
      clearInterval(analogBufferInterval)
    }
  }

  const updateBuffers = (codeBuffer, analogBuffer, device_id, mapper) => {
    const newCodeBuffer = new Uint16Array(BUFFER_SIZE)
    const newAnalogBuffer = new Float32Array(BUFFER_SIZE)

    let updated = false

    wootingAnalogLib.wooting_analog_read_full_buffer_device(newCodeBuffer, newAnalogBuffer, BUFFER_SIZE, device_id);
    if (newCodeBuffer.toString() != codeBuffer.toString()) {
      const hidList = []
      newCodeBuffer.forEach(code => {
        if (code > 0 && !codeBuffer.includes(code)) {
          hidList.push({ hid_id: code, velocity: 127, pressed: true })
        }
      });
      codeBuffer.forEach(code => {
        if (code > 0 && !newCodeBuffer.includes(code)) {
          hidList.push({ hid_id: code, velocity: 0, pressed: false })
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