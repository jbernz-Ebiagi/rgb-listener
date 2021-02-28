import * as jzz from 'jzz';

export default () => {

    const port = jzz().openMidiOut('IAC Driver Bus 1').or('MIDI-Out: Cannot open!');
    console.log('midi port opened');

    const sendNoteOn = (channel: number, note: number, velocity: number = 127) => {
        if (channel) {
            console.log(channel)
            console.log(note)
            port.noteOn(channel, note, velocity);
        }
    }

    const sendNoteOff = (channel: number, note: number) => {
        if (channel) {
            port.noteOff(channel, note);
        }
    }

    return {
        sendNoteOn,
        sendNoteOff
    }

}