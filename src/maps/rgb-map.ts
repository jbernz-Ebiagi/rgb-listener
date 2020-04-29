export interface IRgb {
    r: number;
    g: number;
    b: number;
}

export const rgbMap:{[key: string]:IRgb} = {
    
    'dim-red': {r: 10, g: 0, b: 0},
    'red': {r: 180, g: 0, b: 0},
    'bright-red': {r: 255, g: 50, b: 50},

    'dim-green': {r: 0, g: 40, b: 0},
    'green': {r: 0, g: 170, b: 0},
    'bright-green': {r: 50, g: 255, b: 50},

    'dim-blue': {r: 0, g: 29, b: 50},
    'blue': {r: 0, g: 91, b: 161},
    'bright-blue': {r: 45, g: 162, b: 255},

    'dim-pink': {r: 50, g: 0, b: 29},
    'pink': {r: 170, g: 0, b: 103},
    'bright-pink': {r: 255, g: 50, b: 168},

    'dim-lavender': {r:53, g: 35, b: 59},
    'lavender': {r:150, g: 99, b: 168},
    'bright-lavender': {r: 199, g: 125, b:220},

    'dim-gold': {r: 10, g: 7, b: 0},
    'gold': {r: 149, g: 94, b: 0},
    'bright-gold': {r: 255, g: 221, b: 0},

    'dim-orange': {r: 52, g: 32, b: 1},
    'orange': {r: 144, g: 86, b: 3},
    'bright-orange': {r: 255, g: 153, b: 8},

    'dim-teal': {r: 0, g: 43, b: 17},
    'teal': {r: 0, g: 142, b: 56},
    'bright-teal': {r: 0, g: 255, b: 110},

    'dim-white': {r: 55, g: 55, b: 55},
    'white': {r: 255, g: 255, b: 255},

    'dim-purple': {r: 20, g: 0, b: 31},
    'purple': {r: 89, g: 0, b: 135},

    'dark': {r:0, g: 0, b: 0}
}