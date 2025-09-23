const {Buffer} = require('buffer');

// const buf = Buffer.alloc(4);    //it's an array
// console.log(buf)

const buf = Buffer.from('Hello chai');
console.log(buf);
console.log(buf.toString());
console.log(buf.toString("utf8", 0, 5));
buf[2] = 0x2D
console.log(buf)
console.log(buf.toString())
