import { rgb } from './wooting-rgb';
import { loopStatusMap } from './maps/loop-status';

export function darkenAllLoopKeys(colorArray: rgb[][]) {
    for(let row = 0; row < colorArray.length; row++) {
        for(let col = 0; col < colorArray[row].length; col++) {
          colorArray[row][col] = (loopStatusMap['inactive']);
        }
    }
}

export function setAllLoopKeysToReady(colorArray: rgb[][]) {
    for(let row = 0; row < colorArray.length; row++) {
        for(let col = 0; col < colorArray[row].length; col++) {
            colorArray[row][col] = (loopStatusMap['ready']);
        }
    }
}