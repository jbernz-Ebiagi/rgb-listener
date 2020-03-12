import { Ableton } from "ableton-js";
import Ebiagi from ".";
import WootingRgb from "./wooting-rgb";
import { setAllLoopKeys, setKeyRgb,  } from "./rgb-functions";

export default class AbletonWrapper {

    parent: Ebiagi
    rgb: WootingRgb
    ableton: Ableton
    updateInterval: NodeJS.Timeout

    initialize(parent: Ebiagi, rgb: WootingRgb) {

        this.parent = parent;
        this.rgb = rgb;
        this.ableton = new Ableton();
        return this;
    }

    startUpdater() {
        this.rgb.clear();
        this.updateInterval = setInterval(async () => {
            await this.updateLoops();
            this.rgb.update()
        }, 50);
    }

    stopUpdater(){
        clearInterval(this.updateInterval);
    }

    async updateLoops() {
        const data = await this.ableton.song.get('data');

        const { 
            loops, 
            has_empty_loops, 
            fx 
        } = data.raw;

        if(has_empty_loops){
            setAllLoopKeys(this.rgb, 'dim-red');
        }

        for(const loop of loops){
            setKeyRgb(this.rgb, loop.key_name, loop.color);
        }

        if(data.raw.loops.length > 0){
            setKeyRgb(this.rgb, 'tilde', 'gold');
        } else {
            setKeyRgb(this.rgb, 'tilde', 'dim-gold');
        }
    
    }

}