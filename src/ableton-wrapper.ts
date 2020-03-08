import { Ableton } from "ableton-js";
import Ebiagi from ".";
import WootingRgb from "./wooting-rgb";
import { setAllLoopKeys, setKeyRgb } from "./rgb-functions";

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
        }, 250);
    }

    stopUpdater(){
        clearInterval(this.updateInterval);
    }

    async updateLoops() {
        const scenes = await this.ableton.song.get('scenes');

        const hasAvailableLoops = scenes.filter(scene => scene.raw.name == 'loop[]').length > 0;
        if(hasAvailableLoops){
            setAllLoopKeys(this.rgb, 'ready');
        }
        
        for(const scene of scenes){
            if(scene.raw.name.includes('loop')){
                if(scene.raw.name != 'loop[]'){
                    const name = scene.raw.name;
                    const loopKey = name.substring(name.indexOf('[') + 1, name.lastIndexOf(']'));
                    console.log(scene.raw.status)
                    setKeyRgb(this.rgb, loopKey, scene.raw.status);
                } 
            }
        }
    
    }


}