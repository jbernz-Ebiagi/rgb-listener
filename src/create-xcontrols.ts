import { keyMap, IKey } from './maps/key-map';
import { modifierMap } from './maps/modifier-map';


const parseControl = (control:string, key:IKey) => {
    control = control.replace(/{key_name}/g, key.key_name);
    return control.replace(/{param_name}/g, key.param_name);
}

const rules = [];

for(const key of keyMap){
    if(key.x_control){
        if(key.commands.on.includes("{mod_channel}")){
            for(const mod in modifierMap){
                let control;
                if(key.x_control[mod]){
                    control = parseControl(key.x_control[mod], key);
                }
                else{
                    control = parseControl(key.x_control['none'], key);
                }
                rules.push(`${mod}_${key.key_name} = NOTE, ${modifierMap[mod]+1}, ${key.midi_note ? key.midi_note : key.hid_id}, 0, 0, ${control}`)
            }
        }
        // if(key.x_control['none']){
        //     const control = parseControl(key.x_control['none'], key);
        //     rules.push(`${key.key_name} = NOTE, ${2}, ${key.midi_note ? key.midi_note : key.hid_id}, 0, 0, ${control}`)
        // }
    }
}

const fs = require('fs');
const path = require('path');

const xcontrols = ['[X-CONTROLS]'].concat(rules).join('\n');

fs.writeFile(path.resolve(__dirname, '../dist/X-Controls.txt'), xcontrols, () => {
    console.log('--create xcontrols in dist');
});

fs.writeFile('/Users/justin/nativeKONTROL/ClyphX_Pro/X-Controls.txt', xcontrols, () => {
    console.log('--create xcontrols in working dir');
});
