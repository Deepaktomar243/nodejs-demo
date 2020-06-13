const EventEmitter = require('events');
let eventEmitter = null;
class NodeEmitter {

    constructor() {
        if (!eventEmitter) {
            this.emitter = new EventEmitter();
            eventEmitter = this;
        }
        return eventEmitter;
    }

    raiseEvent(eventName, payload) {
        this.emitter.emit(eventName, payload);
        LHTWebLog('event raised: ', eventName);
    }

    addListener(eventName, callback) {
        LHTWebLog('Listener Added: ', eventName);
        this.emitter.on(eventName, (payload) => {
            LHTWebLog('event listened: ', eventName);
            LHTWebLog('event payload: ', payload);
            callback(payload);
        });
    }
}

function LHTWebLog(msg, payload) {
    console.log(msg, payload);
}
module.exports = NodeEmitter;