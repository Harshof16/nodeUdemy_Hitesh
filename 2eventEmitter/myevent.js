const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('greet', (username) => {
    console.log(`hello ${username} welcome to events`)
})

//emitter to be used only once
eventEmitter.once('pushnotify', () => {
    console.log('This event will run only once')
})

//Emit the event - based on this event the listener will be called
eventEmitter.emit('greet', "harsh");
eventEmitter.emit('greet', "Lora");
eventEmitter.emit('pushnotify');
eventEmitter.emit('pushnotify');


const myListener = () => console.log("I'm a test listener");
eventEmitter.on('test', myListener);
eventEmitter.emit('test');
//on test event removing above listener
eventEmitter.removeListener('test', myListener);
eventEmitter.emit('test');

//listener count
console.log(eventEmitter.listeners('test'));



