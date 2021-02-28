import keyMap from './key_functions/key_map'

let counter = 0
const rules = []
const dict = {}

for(const k of keyMap) {
    for(const xControl of k.xControls){
        const note = counter % 127
        const channel = Math.floor(counter/127)+2
        rules.push(`${counter}_${k.key_name} = NOTE, ${channel}, ${note}, 0, 0, ${xControl}`)
        dict[xControl] = [channel-1, note]
        counter++
    }
}

const fs = require('fs');
const path = require('path');

fs.writeFile(path.resolve(__dirname, '../dist/X-Controls.json'), JSON.stringify(dict), () => {
    console.log('--create xcontrols json in dist');
});

const xcontrols = ['[X-CONTROLS]'].concat(rules).join('\n');

fs.writeFile(path.resolve(__dirname, '../dist/X-Controls.txt'), xcontrols, () => {
    console.log('--create xcontrols txt in dist');
});

fs.writeFile('/Users/justin/nativeKONTROL/ClyphX_Pro/X-Controls.txt', xcontrols, () => {
    console.log('--create xcontrols in working dir');
});
