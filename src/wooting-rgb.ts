const ffi = require('ffi');
const ref = require('ref');

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

const ROWS = 6;
const COLUMNS = 21;

export type rgb = {r: number, g: number, b: number}

export class WootingRgb {

    colorArray : rgb[][]

    initialize(){

        if(!wootingRgbLib.wooting_rgb_kbd_connected()){
            console.log('no keyboard detected')
        }

        // wootingRgbLib.wooting_rgb_array_auto_update(true)
        
        //initialize array
        this.colorArray = [];
        for(let row = 0; row < ROWS; row++) {
          this.colorArray.push([])
          for(let col = 0; col < COLUMNS; col++) {
            this.colorArray[row].push({r: 0, g: 0, b: 0})
          }
        }

    }

    updateRgb() : void {
        const dylibArray = [];
        this.colorArray.forEach(row => row.forEach(col => {
            dylibArray.push(col.r)
            dylibArray.push(col.g)
            dylibArray.push(col.b)
          }))
        const dylibBuffer = Uint8Array.from(dylibArray)

        wootingRgbLib.wooting_rgb_array_set_full(dylibBuffer);
        wootingRgbLib.wooting_rgb_array_update_keyboard();
    }
    
    resetKeyboard() : void {
        wootingRgbLib.wooting_rgb_reset();
    }


}





// export function wooting_rgb_direct_set_key(
//         row: number, 
//         column: number, 
//         red: number, 
//         green: number, 
//         blue: number
//     ) : boolean {
//     return wootingRgb.wooting_rgb_direct_set_key();
// }

// export function wooting_rgb_direct_reset_key(
//         row: number, 
//         column: number, 
//     ) : boolean {
//     return wootingRgb.wooting_rgb_direct_reset_key();
// }
  