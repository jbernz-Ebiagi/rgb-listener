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

        // console.log(data)

        if(!data) return

        const { 
            instr, 
            inputs,
            modules,
            loops,
            mfx,
            gfx,
            globalLoops,
            clips,
            snaps
        } = data;

        this.rgb.clear()

        if(!instr || !inputs || !modules || !loops || !mfx || !globalLoops || !gfx || !clips || !snaps) return;

        if(this.parent.modifiers.includes('esc')){

            for(const i of modules){
                const color = i.brightness > 0 ? i.color : 'dim-' + i.color
                setKeyParamRgb(this.rgb, `INSTR${i.index+1}`, color);
            }

        } else if(this.parent.modifiers.includes('snap')) {

            for(const i of instr){
                const color = i.brightness > 0 ? i.color : 'dim-' + i.color
                setKeyParamRgb(this.rgb, `INSTR${i.index+1}`, color);
            }

            for(let i = 0; i < 4 ; i++){
                const color = 'dim-blue'
                setKeyParamRgb(this.rgb, `MFX${i+1}`, color);
            }

        } else {

            for(const i of instr){
                const color = i.brightness > 0 ? i.color : 'dim-' + i.color
                setKeyParamRgb(this.rgb, `INSTR${i.index+1}`, color);
            }

            for(const i of mfx){
                const color = i.brightness > 0 ? i.color : 'dim-' + i.color
                setKeyParamRgb(this.rgb, `MFX${i.index+1}`, color);
            }

        }
        

        for(const i in inputs){
            setKeyParamRgb(this.rgb, i, inputs[i]);
        }

        for(const i of loops){
            const color = i.brightness == 0 && i.color != 'dark' ? 'dim-' + i.color : i.color
            setKeyRgb(this.rgb, i.key_name, color);
        }

        for(const i of clips){
            const color = i.brightness == 0 && i.color != 'dark' ? 'dim-' + i.color : i.color
            setKeyParamRgb(this.rgb, i.clip_name, color);
        }

        for(const i of globalLoops){
            const color = i.brightness == 0 && i.color != 'dark' ? 'dim-' + i.color : i.color
            setKeyParamRgb(this.rgb, `RECORD${i.index+1}`, color);
        }

        for(const i of gfx){
            const color = i.brightness > 0 ? i.color : 'dim-' + i.color
            setKeyParamRgb(this.rgb, `GFX${i.index+1}`, color);
        }

        for(const i of snaps){
            const color = i.brightness > 0 ? i.color : 'dim-' + i.color
            setKeyParamRgb(this.rgb, `SNAP${i.index+1}`, color);
        }

        this.rgb.update()
    
    }

}