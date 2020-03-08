import * as jzz from 'jzz';

export default class MidiOut {

    port : any

    initialize = () => {
        this.port = jzz().openMidiOut('IAC Driver Bus 1').or('MIDI-Out: Cannot open!');
        console.log('midi port opened');
        return this;
    }

    sendNoteOn = (channel: number, note: number) => {
        this.port.noteOn(channel, note, 127);
    }


    sendNoteOff = (channel: number, note: number) => {
        this.port.noteOff(channel, note, 127);
    }

}