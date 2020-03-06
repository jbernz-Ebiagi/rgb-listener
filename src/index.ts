import { Ableton } from "ableton-js";
import { WootingRgb } from './wooting-rgb';
import updateLoops from './update-loops';
import HidStream from "./hid-stream";
import MidiOut from './midi-out';


export default class Ebiagi {

    ableton: Ableton
    rgb: WootingRgb
    hid: HidStream
    midi: MidiOut
    interval: NodeJS.Timeout
    active: boolean

    initialize() {
        this.ableton = new Ableton();
        this.hid = new HidStream().initialize(this);
        this.rgb = new WootingRgb().initialize();
        this.midi = new MidiOut().initialize();

        this.pullLoopInfo();

        this.active = true;
    }

    pullLoopInfo() {
        updateLoops(this.ableton, this.rgb);
        this.interval = setInterval(() => {
            updateLoops(this.ableton, this.rgb);
        }, 200);
    }

    toggleKeyboardMidi() {
        console.log('toggle state: '+!this.active);
        if(this.active){
            this.hid.pause();
            clearInterval(this.interval);
            this.rgb.resetKeyboard();
        } else {
            this.hid.resume();
            this.rgb = new WootingRgb().initialize();
            this.pullLoopInfo();
        }
        this.active = !this.active;
    }

}

new Ebiagi().initialize();