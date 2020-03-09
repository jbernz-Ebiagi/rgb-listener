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
    'dim-blue': {r: 0, g: 29, b: 50}
}