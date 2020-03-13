export interface IRgb {
    r: number;
    g: number;
    b: number;
}

export const rgbMap:{[key: string]:IRgb} = {
    'dim-red': {r: 10, g: 0, b: 0},
    'red': {r: 255, g: 0, b: 0},
    'green': {r: 0, g: 255, b: 0},
    'dim-green': {r: 0, g: 10, b: 0},
    'pink': {r: 255, g: 0, b: 153},
    'dim-pink': {r: 50, g: 0, b: 29},
    'blue': {r: 0, g: 134, b: 255},
    'dim-blue': {r: 0, g: 29, b: 50},
    'gold': {r: 149, g: 94, b: 0},
    'dim-gold': {r: 10, g: 7, b: 0},
    'white': {r: 255, g: 255, b: 255},
    'dim-white': {r: 55, g: 55, b: 55},
    'purple': {r: 89, g: 0, b: 135},
    'dim-purple': {r: 20, g: 0, b: 31},
    'dark': {r:0, g: 0, b: 0}
}