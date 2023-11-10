/* eslint-disable linebreak-style */

function greet(name) {
    if (name === undefined || name === null || name.length === 0) {
        return 'Hello, my friend.';
    }
    let upperName = name.toUpperCase();
    if (upperName === name) {
        return 'HELLO, ' + upperName + '!';
    } else {
        return 'Hello ' + name + ' !';
    }
}

module.exports = greet;