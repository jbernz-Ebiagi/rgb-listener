import * as jzz from 'jzz';

export default class MidiOut {

    port : any

    initialize = () => {
        this.port = jzz().openMidiOut('IAC Driver Bus 1').or('MIDI-Out: Cannot open!');
        return this;
    }

    send = (channel: number, note: number) => {
        this.port.noteOn(channel, note, 127);
    }

}