export interface IRgb {
    r: number;
    g: number;
    b: number;
}

export const rgbMap:{[key: string]:IRgb} = {
    'loop_ready': {r: 10, g: 0, b: 0},
    'loop_recording': {r: 255, g: 0, b: 0},
    'loop_playing': {r: 0, g: 255, b: 0},
    'loop_stopped': {r: 0, g: 10, b: 0},
    'loop_empty': {r: 0, g: 10, b: 0},
}