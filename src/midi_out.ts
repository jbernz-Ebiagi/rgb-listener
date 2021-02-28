import * as jzz from 'jzz';
const midi = require('easymidi');

export default () => {

    const output = new midi.Output('Virtual', true);
    console.log('midi port opened');

    const sendNoteOn = (channel: number, note: number, velocity: number = 127) => {
        output.send('noteon', {channel, note, velocity});
    }

    const sendNoteOff = (channel: number, note: number) => {
        output.send('noteoff', {channel, note, velocity: 0});
    }

    return {
        sendNoteOn,
        sendNoteOff
    }

}