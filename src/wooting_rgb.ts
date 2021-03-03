import { State, RGB } from './types'
import keyMap from './key_functions/key_map'

const ffi = require('ffi')
const ref = require('ref')

// Define the functions from the rgb sdk
// @ts-ignore
const wootingRgbLib = ffi.Library('./libs/libwooting-rgb-sdk.dylib', {
    "wooting_rgb_kbd_connected": [ 'bool', [] ],
    "wooting_rgb_reset": [ 'bool', [] ],
    "wooting_rgb_direct_set_key": [ 'bool', ['uint8', 'uint8', 'uint8', 'uint8', 'uint8'] ],
    "wooting_rgb_direct_reset_key": [ 'bool', ['uint8', 'uint8'] ],
    "wooting_rgb_array_auto_update": [ 'void', ['bool'] ],
    "wooting_rgb_array_set_full": [ 'bool', [ref.refType('uint8')] ],
    "wooting_rgb_array_update_keyboard": [ 'bool', [] ],
});

const ROWS = 6
const COLUMNS = 21
const UPDATE_INTERVAL = 1

export default () => {

    let rgbUpdateInterval

    const start = (state: State) =>{
        console.log('starting rgb listener...')

        if(!wootingRgbLib.wooting_rgb_kbd_connected()){
            console.log('failed to connect to keyboard rgb')
        } else {
            console.log('connected to keyboard rgb')
        }

        rgbUpdateInterval = setInterval( () => {
            try{
                const colorArray = _newColorArray()
                for(const key of keyMap){
                    colorArray[key.row][key.column] = key.color(state, key)
                }
                _update(colorArray)
            }
            catch(e){
                console.log(e)
            }

        }, UPDATE_INTERVAL)

    }

    const stop = () => {
        console.log('stopping rgb listener...')
        clearInterval(rgbUpdateInterval)
        wootingRgbLib.wooting_rgb_reset()
    }

    const _update = (colorArray:RGB[][]) => {
        const dylibArray = [];
        colorArray.forEach(row => row.forEach(col => {
            dylibArray.push(col.r)
            dylibArray.push(col.g)
            dylibArray.push(col.b)
        }));
        const dylibBuffer = Uint8Array.from(dylibArray)
        
        wootingRgbLib.wooting_rgb_array_set_full(dylibBuffer)
        wootingRgbLib.wooting_rgb_array_update_keyboard()
    }

    const _newColorArray = ():RGB[][] => {
        const arr = []
        for(let row = 0; row < ROWS; row++) {
            arr.push([])
            for(let col = 0; col < COLUMNS; col++) {
                arr[row].push({r: 0, g: 0, b: 0})
            }
        }
        return arr
    }

    return {
        start,
        stop
    }
}