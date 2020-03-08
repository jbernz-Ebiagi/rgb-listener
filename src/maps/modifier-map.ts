export const modifierMap = {
    'lctrl': 2,
    'lshift': 3
}

export const getChannelFromModifiers = (modifiers:string[]) => {
    for(const modifier of modifiers){
        if(modifierMap[modifier]){
            return modifierMap[modifier];
        }
    }
    return 1;
}