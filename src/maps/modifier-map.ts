export const modifierMap = {
    '': 1,
    'lctrl': 2,
    'lshift': 3,
    'lalt': 4,
    'esc': 5,
    'esc,lctrl': 6
}

export const getChannelFromModifiers = (modifiers:string[]) => {
    const modifier = modifiers.sort().join(',')
    return modifierMap[modifier];
}