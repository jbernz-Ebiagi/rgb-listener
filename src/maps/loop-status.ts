type loopStatus = 'ready'|'recording'|'playing'|'stopped'|'inactive';

export const loopStatusMap = {
    'ready': {r: 10, g: 0, b: 0},
    'recording': {r: 255, g: 0, b: 0},
    'playing': {r: 0, g: 255, b: 0},
    'stopped': {r: 0, g: 10, b: 0},
    'inactive': {r: 0, g: 10, b: 0},
}

export const getLoopStatus = (clipSlots) : loopStatus => {
    for(const clipSlot of clipSlots){
        if(clipSlot.is_recording){
            return 'recording';
        } if(clipSlot.is_playing) {
            return 'playing';
        }
    }
    return 'stopped';
}

