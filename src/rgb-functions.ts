import WootingRgb from './wooting-rgb';
import { keyMap } from './maps/key-map';
import { rgbMap } from './maps/rgb-map';


export function setAllLoopKeys(rgb:WootingRgb, colorName) {
    const colorArray = rgb.colorArray;
    for(const key of keyMap){
        if(key.x_control && key.x_control['none'].includes('select_loop')){
            colorArray[key.row][key.column] = (rgbMap[colorName]);
        }
    }
}

export function setKeyRgb(rgb:WootingRgb, keyName:string, colorName:string) {
    const colorArray = rgb.colorArray;

    const key = keyMap.find( k => k.key_name === keyName);
    if(key) colorArray[key.row][key.column] = (rgbMap[colorName]);
}