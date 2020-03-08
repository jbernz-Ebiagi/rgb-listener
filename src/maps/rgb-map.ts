export interface IRgb {
    r: number;
    g: number;
    b: number;
}

export const rgbMap:{[key: string]:IRgb} = {
    'ready': {r: 10, g: 0, b: 0},
    'recording': {r: 255, g: 0, b: 0},
    'playing': {r: 0, g: 255, b: 0},
    'stopped': {r: 0, g: 10, b: 0},
}