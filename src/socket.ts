import Ebiagi from ".";
import * as dgram from "dgram";

export default class Socket {

    parent: Ebiagi
    updateInterval: NodeJS.Timeout
    client: dgram.Socket
    callback: Function
    private host = "127.0.0.1"
    private sendPort = 9005
    private listenPort = 9004

    initialize(callback: Function) {
        this.client = dgram.createSocket({ type: "udp4", reuseAddr: true });
        this.client.bind(this.listenPort, this.host);
        this.callback = callback
        this.client.addListener("message", this.handleIncoming.bind(this));
        console.log(`started socket on host ${this.host}`)
        return this;
    }

    handleIncoming(msg: Buffer, info: dgram.RemoteInfo) {
        const data = JSON.parse(msg.toString())
        // console.log(`receiving message: ${msg.toString()}`)
        this.callback(data.data)
    }

    sendMessage(message) {
        const msg = JSON.stringify(message)
        // console.log(`sending message: ${msg}`)
        const buffer = Buffer.from(msg);
        this.client.send(buffer, 0, buffer.length, this.sendPort, this.host);
    }

    getState() {
        this.sendMessage({event:'get_state', data: {}})
    }
      
}