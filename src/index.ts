import AbletonWrapper from "./ableton-wrapper";
import WootingRgb from './wooting-rgb';
import WootingAnalog from './wooting-analog';
import HidBlocker from "./hid-blocker";
import MidiOut from './midi-out';


export default class Ebiagi {

    ableton: AbletonWrapper
    analog: WootingAnalog
    rgb: WootingRgb
    hid: HidBlocker
    midi: MidiOut
    active: boolean
    modifiers: string[]

    initialize() {

        this.modifiers = [];

        this.analog = new WootingAnalog().initialize(this);
        this.hid = new HidBlocker().initialize(this);
        this.rgb = new WootingRgb().initialize();
        this.ableton = new AbletonWrapper().initialize(this, this.rgb);
        this.midi = new MidiOut().initialize();

        this.ableton.startUpdater();
        this.active = true;
    }

    enable() {
        this.ableton.startUpdater();
        this.hid.block();
        this.rgb = new WootingRgb().initialize();
        this.active = true;
    }

    disable() {
        this.ableton.stopUpdater();
        this.hid.unblock();
        this.rgb.reset();
        this.active = false;
    }

    command(commandString) {
        console.log(commandString);
        const command = commandString.split(':')[0];
        const params = commandString.split(':')[1].split(',');

        switch (command){
            case 'toggle_keyboard':
                if(this.active){
                    this.disable()
                }
                else {
                    this.enable()
                }
                break;
            default:
                console.log(`command "${command}" not found`);
        }

    }
        

}

new Ebiagi().initialize();