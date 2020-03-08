import Ebiagi from ".";
import { keyMap, IKey } from './maps/key-map';

const ffi = require('ffi');
const ref = require('ref');
const Struct = require('ref-struct');
var ArrayType = require('ref-array');

const DeviceInfo = Struct({
    vendor_id: 'ushort',
    product_id: 'ushort',
    manufacturer_name: 'string',
    device_name: 'string',
    device_id: 'ulong',
    device_type: 'ushort'
});
const DevicePointer = ref.refType(DeviceInfo);

const pvoid = ref.refType(ref.types.void);
const PVoidArray = ArrayType(pvoid);

// Define the functions from the rgb sdk
// @ts-ignore
const wootingAnalogLib = ffi.Library('./libs/libwooting_analog_wrapper.dylib', {
    "wooting_analog_initialise": [ 'int', [] ],
    "wooting_analog_is_initialised": [ 'bool', [] ],
    "wooting_analog_get_connected_devices_info": [ 'int', [PVoidArray, 'int']],
    "wooting_analog_read_full_buffer_device": [ 'int', ['ushort *', 'long *', 'int', 'ulong']]
});

export default class WootingAnalog {

    parent: Ebiagi
    updateInterval: NodeJS.Timeout
    bufferSize: number
    codeBuffer: Uint16Array
    analogBuffer: Float32Array
    device_id: number 

    initialize(parent: Ebiagi){

        this.parent = parent;
        this.bufferSize = 10;

        wootingAnalogLib.wooting_analog_initialise();
        const deviceBuffer = new PVoidArray(this.bufferSize);
        const result = wootingAnalogLib.wooting_analog_get_connected_devices_info(deviceBuffer, this.bufferSize);

        if(result > 0){
            console.log('connected to keyboard analog');
            this.device_id = ref.get(deviceBuffer.buffer, 0, DevicePointer).deref().device_id;
            this.codeBuffer = new Uint16Array(this.bufferSize);
            this.analogBuffer = new Float32Array(this.bufferSize);
        } else {
            console.log('analog sdk cannot connect');
        }

        this.updateInterval = setInterval( () => {
            this.updateBuffers()
        },1);

        return this;
    }

    updateBuffers() {
        const newCodeBuffer = new Uint16Array(this.bufferSize);
        const newAnalogBuffer = new Float32Array(this.bufferSize);

        wootingAnalogLib.wooting_analog_read_full_buffer_device(newCodeBuffer, newAnalogBuffer, this.bufferSize, this.device_id);
        if(newCodeBuffer.toString() != this.codeBuffer.toString()){
            this.parseEvent(newCodeBuffer);
            this.codeBuffer = newCodeBuffer;
            this.analogBuffer = newAnalogBuffer;
        }
    }

    parseEvent(newCodes: Uint16Array) {
        newCodes.forEach( code => {
            if(code > 0 && !this.codeBuffer.includes(code)){
                const key = this.getKey(code);
                if(key && key.commands.on){
                    this.parent.command(key.commands.on.replace("{hid_id}", code.toString()));
                }
            }
        });
        this.codeBuffer.forEach( code => {
            if(code > 0 && !newCodes.includes(code)){
                const key = this.getKey(code);
                if(key && key.commands.off){
                    this.parent.command(key.commands.off.replace("{hid_id}", code.toString()));
                }
            }
        });
    }

    getKey(hidID){
        return keyMap.find( key => key.hid_id === hidID);
    }

}