const fs = require('node:fs');

const contents = fs.readFileSync('example.txt', 'utf-8');

fs.writeFileSync('copy.txt', 'I want to write this', 'utf-8');
fs.appendFileSync('copy.txt', `\n${contents}`, 'utf-8')

// console.log(contents);

//create directory
fs.mkdirSync('games/xyx/temp', {recursive: true});

//remove directory
fs.rmdirSync('games/xyx/temp')

//delete file
fs.unlinkSync('copy.txt')