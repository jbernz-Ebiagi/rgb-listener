import Ebiagi from ".";
import WootingRgb from "./wooting-rgb";
import Socket from './socket';
import { setAllLoopKeys, setKeyRgb, setKeyParamRgb} from "./rgb-functions";

export default class AbletonWrapper {

    parent: Ebiagi
    rgb: WootingRgb
    socket: Socket
    updateInterval: NodeJS.Timeout

    initialize(parent: Ebiagi, rgb: WootingRgb) {

        this.parent = parent;
        this.rgb = rgb;
        this.socket = new Socket().initialize(this.updateData.bind(this));
        return this;
    }

    startUpdater() {
        this.rgb.clear();
        this.updateInterval = setInterval(async () => {
            this.socket.getState()
        }, 100);
    }

    stopUpdater(){
        clearInterval(this.updateInterval);
    }

    updateData(data) {

        const { 
            instr, 
            inputs, 
        } = data;

        for(const i of instr){
            const color = i.brightness > 0 ? i.color : 'dim-' + i.color
            setKeyParamRgb(this.rgb, `INSTR${i.index+1}`, color);
        }

        for(const i in inputs){
            setKeyParamRgb(this.rgb, i, inputs[i]);
        }


        // if(has_empty_loops){
        //     setAllLoopKeys(this.rgb, 'dim-red');
        // }

        // for(const loop of loops){
        //     setKeyRgb(this.rgb, loop.key_name, loop.color);
        // }

        // for(const fxO of fx){
        //     setKeyParamRgb(this.rgb, fxO.name, fxO.color);
        // }

        // for(const c of cbord){
        //     setKeyParamRgb(this.rgb, c.name, c.color);
        // }

        // if(data.raw.loops.length > 0){
        //     setKeyRgb(this.rgb, 'tilde', 'gold');
        // } else {
        //     setKeyRgb(this.rgb, 'tilde', 'dim-gold');
        // }

        // if(data.raw.fx.length > 0){
        //     setKeyRgb(this.rgb, 'escape', 'dim-purple');
        // } else {
        //     setKeyRgb(this.rgb, 'escape', 'dark');
        // }

        this.rgb.update()
    
    }

}