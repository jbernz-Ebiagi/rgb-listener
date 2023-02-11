import * as dgram from "dgram";
import { State } from "./types";

const HOST = "127.0.0.1"
const SEND_PORT = 9005
const LISTEN_PORT = 9004

export default () => {
    console.log(`starting socket on host ${HOST}...`)
    let updateInterval
    const client = dgram.createSocket({ type: "udp4", reuseAddr: true })
    client.bind(LISTEN_PORT, HOST)

    const _sendMessage = (message) => {
        const msg = JSON.stringify(message)
        const buffer = Buffer.from(msg);
        client.send(buffer, 0, buffer.length, SEND_PORT, HOST);
    }

    const start = (state: State) => {
        console.log(`beginning communcation with ableton...`)
        client.addListener("message", (msg: Buffer, info: dgram.RemoteInfo) => {
            try{
                const data = JSON.parse(msg.toString()).data
                if(data){
                    // console.log(data)
                    state.ableton = data
                }
                //Send to GUI
                client.send(msg, 0, msg.length, 9006, HOST);
            }
            catch(e){
                console.log(e)
            }

        })
        updateInterval = setInterval(async () => {
            _sendMessage({event:'get_state', data: {}})
        }, 100);
    }

    const stop = () => {
        console.log(`halting communcation with ableton...`)
        client.removeAllListeners()
        clearInterval(updateInterval)
    }

    return {
        start,
        stop
    }
}