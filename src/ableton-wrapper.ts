import { Ableton } from "ableton-js";
import Ebiagi from ".";
import WootingRgb from "./wooting-rgb";
import { setAllLoopKeys, setKeyRgb } from "./rgb-functions";
import { Scene } from "ableton-js/ns/scene";

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
            setAllLoopKeys(this.rgb, 'dim-red');
        }

        for(const scene of scenes){
            if(scene.raw.name.includes('loop')){

                if(scene.raw.name != 'loop[]'){
                    const name = scene.raw.name;
                    const loopKey = name.substring(name.indexOf('[') + 1, name.lastIndexOf(']'));
                    setKeyRgb(this.rgb, loopKey, getSceneColor(scene));
                } 
            }
        }
    
    }

}

const colorIndex = {
    9: 'blue',
    12: 'pink',
    56: 'red',
    69: 'dim-red'
}

const getSceneColor = (scene) => {
    if(scene.raw.status == 'playing' || scene.raw.status == 'recording'){
        return colorIndex[scene.raw.color]
    }
    if(scene.raw.status == 'stopped'){
        return 'dim-' + colorIndex[scene.raw.color]
    }
}