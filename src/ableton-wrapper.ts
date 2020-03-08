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
        this.updateInterval = setInterval(async () => {
            this.rgb.clear()
            await this.updateLoops();
            this.rgb.update()
        }, 200);
    }

    stopUpdater(){
        clearInterval(this.updateInterval);
    }

    async updateLoops() {
        const scenes = await this.ableton.song.get('scenes');

        const hasAvailableLoops = scenes.filter(scene => scene.raw.name == 'loop[]').length > 0;
        if(hasAvailableLoops){
            setAllLoopKeys(this.rgb, 'loop_ready');
        }
        
        for(const scene of scenes){
            if(scene.raw.name.includes('loop')){
                if(scene.raw.name != 'loop[]'){
                    const name = scene.raw.name;
                    const loopKey = name.substring(name.indexOf('"') + 1, name.lastIndexOf('"'));

                    const clipSlots = await scene.get('clip_slots');
                    
                    //Get loop status
                    let status = 'loop_stopped';
                    for(const clipSlot of clipSlots){
                        if(clipSlot.raw.is_recording){
                            status = 'loop_recording';
                        } else if(clipSlot.raw.is_playing) {
                            status = 'loop_playing';
                        }
                    }
                    setKeyRgb(this.rgb, loopKey, status);
                } 
            }
        }
    
    }


}