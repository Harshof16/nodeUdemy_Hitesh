const EventEmitter = require('events');

class Chat extends EventEmitter {
    sendMessage(msg) {
        console.log(`Message sent : ${msg}`);
        this.emit('messageReceived', msg);     //as soon as message is sent, this emits a new event named 'Message received' 
    }
}

const chat = new Chat();
chat.on('messageReceived', (msg) => {
    console.log(`New Message : ${msg}`)
})

//trigger event
chat.sendMessage("Hello there!")

// Output
// Message sent : Hello there!
// New Message : Hello there!