const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id)=>{
    console.log(`data received ${name} with id:${id}`);
});

customEmitter.on('response', ()=>{
    console.log(`some other logic here`);
});

// Order of this matters. If we placed the emit before the on, it would not work.
customEmitter.emit('response', 'John', 34);