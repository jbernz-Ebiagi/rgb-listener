import { Ableton } from "ableton-js";
import { WootingRgb, rgb } from './wooting-rgb';
import { darkenAllLoopKeys, setAllLoopKeysToReady } from './matrix-melters';
import { getLoopStatus, loopStatusMap } from './maps/loop-status';
import keyPositionMap from './maps/key-position';

export default async function updateLoops(ableton:Ableton, wooting:WootingRgb) {
      
    const scenes = await ableton.song.get('scenes');
    if(scenes.filter(scene => scene.raw.name == 'loop[]').length > 0){
        setAllLoopKeysToReady(wooting.colorArray);
    } else {
        darkenAllLoopKeys(wooting.colorArray);
    }

    for(const scene of scenes){
        if(scene.raw.name.includes('loop')){
            if(scene.raw.name != 'loop[]'){
                const clipSlots = await scene.get('clip_slots');
                const loopRgb = loopStatusMap[getLoopStatus(clipSlots.map( c => c.raw))];
                const {row, column} = keyPositionMap[getLoopKeyFromName(scene.raw.name)]
                wooting.colorArray[row][column] = loopRgb;
            } 
        }
    }

    wooting.updateRgb();

}

const getLoopKeyFromName = (name) => {
    return name.substring(
        name.indexOf('"') + 1, 
        name.lastIndexOf('"')
    );
}

