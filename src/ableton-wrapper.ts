import { Ableton } from "ableton-js";
import Ebiagi from ".";
import WootingRgb from "./wooting-rgb";
import { setAllLoopKeys, setKeyRgb, setKeyParamRgb} from "./rgb-functions";

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
            await this.updateData();
            this.rgb.update()
        }, 100);
    }

    stopUpdater(){
        clearInterval(this.updateInterval);
    }

    async updateData() {
        const data = await this.ableton.song.get('data');
        console.log(data.raw)

        const { 
            loops, 
            has_empty_loops, 
            fx ,
            cbord
        } = data.raw;

        if(has_empty_loops){
            setAllLoopKeys(this.rgb, 'dim-red');
        }

        for(const loop of loops){
            setKeyRgb(this.rgb, loop.key_name, loop.color);
        }

        for(const fxO of fx){
            setKeyParamRgb(this.rgb, fxO.name, fxO.color);
        }

        for(const c of cbord){
            setKeyParamRgb(this.rgb, c.name, c.color);
        }

        if(data.raw.loops.length > 0){
            setKeyRgb(this.rgb, 'tilde', 'gold');
        } else {
            setKeyRgb(this.rgb, 'tilde', 'dim-gold');
        }

        if(data.raw.fx.length > 0){
            setKeyRgb(this.rgb, 'escape', 'dim-purple');
        } else {
            setKeyRgb(this.rgb, 'escape', 'dark');
        }
    
    }

}