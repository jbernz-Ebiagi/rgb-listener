import { HID, devices } from 'node-hid';
import Ebiagi from './index';

export default class HidBlocker {

    hid : HID
    parent: Ebiagi

    initialize = (parent: Ebiagi) => {

        this.parent = parent;

        this.block();
        //this.hid.setNonBlocking(false);
        return this;
    }

    unblock() {
        console.log('set hid blocking false')
        //this.hid.setNonBlocking(true);
        this.hid.close();
    }

    block() {
        console.log('set hid blocking true')
        for (const device of devices()){
            if(device.product == 'WootingOne' && device.interface == 3){
                this.hid= new HID(device.path);
                console.log('connected to keyboard hid')
            }
        }
    }

}