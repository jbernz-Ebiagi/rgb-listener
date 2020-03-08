import AbletonWrapper from "./ableton-wrapper";
import WootingRgb from './wooting-rgb';
import WootingAnalog from './wooting-analog';
import HidBlocker from "./hid-blocker";
import MidiOut from './midi-out';
import { getChannelFromModifiers } from './maps/modifier-map';


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
        this.modifiers = [];
        this.active = false;
    }

    command(commandString) {

        const command = commandString.split(':')[0];
        const params = commandString.split(':')[1].split('|');

        if(this.active || command === 'toggle_keyboard'){
            console.log(commandString);
            switch (command){
                case 'toggle_keyboard':
                    this.active ? this.disable() : this.enable();
                    break;
                case 'activate_modifier':
                    this.modifiers.push(params[0]);
                    break;
                case 'deactivate_modifier':
                    this.modifiers.splice(this.modifiers.indexOf(params[0]));
                    break;
                case 'send_midi_on':
                    this.midi.sendNoteOn(parseInt(params[0]), parseInt(params[1]));
                    break;
                case 'send_midi_off':
                    this.midi.sendNoteOff(parseInt(params[0]), parseInt(params[1]));
                    break;
                default:
                    console.log(`command "${command}" not found`);
            }
        }

    }
        

}

new Ebiagi().initialize();