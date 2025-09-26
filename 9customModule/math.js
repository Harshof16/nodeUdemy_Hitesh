//named export

exports.add = (a, b) => {
    return a + b;
}

exports.minus = (a, b) => {
    return a - b;
}

//Default export
module.exports = () => {
    console.log('Hey, Im default');
    
}