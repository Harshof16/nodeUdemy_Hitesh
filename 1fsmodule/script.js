const fs = require('node:fs');

console.log('Start of script');

// sync => Blocking operations
const contents = fs.readFileSync('example.txt', 'utf-8');
console.log(contents);

// async => Non-Blocking operations
fs.readFile('example.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log('Error', err);
        return;
    } else {
        console.log(data);
    }
})

console.log('End of script');
