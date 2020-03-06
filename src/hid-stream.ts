import { HID, devices, Device } from 'node-hid';
import keyMap from './maps/key-map';
import Ebiagi from './index';

export default class HidStream {

    hid : HID
    parent: Ebiagi

    initialize = (parent: Ebiagi) => {

        this.parent = parent;

        for (const device of devices()){
            if(device.product == 'WootingOne' && device.interface == 3){
                this.hid= new HID(device.path);
                console.log('connected to keyboard hid')
            }
        }
        this.hid.setNonBlocking(false);
        this.hid.on("data", (data:Buffer) => {
            //console.log(data.toJSON().data.join(''));
            this.hidCommand(data.toJSON().data.join(''));
        });

        return this;
    }

    pause() {
        console.log('set hid blocking false')
        this.hid.setNonBlocking(true);
        //this.hid.pause();
    }

    resume() {
        console.log('set hid blocking true')
        this.hid.setNonBlocking(false);
        //this.hid.resume();
    }

    hidCommand = (hid_id:string) => {
        const key = keyMap.find(k => k.hid_id === hid_id);
        if(key){
            switch(key.command) {
                case 'toggle_hid_in':
                    this.parent.toggleKeyboardMidi();
            }
        }
    }

}