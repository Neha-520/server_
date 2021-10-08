const EventEmitter = require('events'); //created class
const event = new EventEmitter();

event.on('sayMyName', () => {
    console.log("my name is ...");
}) //defining funcn
event.on('sayMyName', () => {
    console.log("frtgrtg");
})
//can fir multiple callbacks with single event
event.emit('sayMyName'); //fired event

event.on('checkPage', (sc, msg) => {
    console.log(`status code is ${sc} and page is ${msg}`)
})
event.emit("checkPage", 200, "ok");



