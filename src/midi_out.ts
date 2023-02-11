// const midi = require('easymidi');
const midi = require('midi')

export default () => {

    // const output = new midi.Output('Virtual', true);
    // const intput = new midi.Input('Virtual', true);
    // const output = new midi.output()
    // output.openVirtualPort('IAC Driver (Bus 1)')

    // create a new output object
    let output = new midi.output()

    // enumerate available output ports
    for (var i = 0; i < output.getPortCount(); i++) {
        var portName = output.getPortName(i);
        console.log(portName)
        if (portName.indexOf("IAC Driver Bus 1") !== -1) {
            output.openPort(i);
            console.log('midi port opened');
            console.log("Connected to " + portName);
            break;
        }
    }

    const sendNoteOn = (channel: number, note: number, velocity: number = 127) => {
        // output.send('noteon', {channel, note, velocity});
        output.sendMessage([144+channel,note,velocity])
    }

    const sendNoteOff = (channel: number, note: number) => {
        // output.send('noteoff', {channel, note, velocity: 0});
        output.sendMessage([128+channel,note,0])
    }

    return {
        sendNoteOn,
        sendNoteOff
    }

}