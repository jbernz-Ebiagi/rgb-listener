import { HID, devices } from 'node-hid';

const DEVICE = 'WootingOne'
const DEVICE_INTERFACE = 3

export default () => {

    let hid : HID

    const unblock = () => {
        console.log('set hid blocking false')
        hid.close();
    }

    const block = () => {
        console.log('set hid blocking true')
        for (const device of devices()){
            if(device.product == DEVICE && device.interface == DEVICE_INTERFACE){
                hid = new HID(device.path);
                console.log('connected to keyboard hid')
            }
        }
    }

    return {block, unblock}

}