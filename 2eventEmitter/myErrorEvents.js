const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('error', (err) => {
    console.log('An error occurred:', err);
})

eventEmitter.emit('error', new Error('Something went wrong!'));