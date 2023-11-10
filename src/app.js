/* eslint-disable linebreak-style */

function greet(name) {
    if (name === undefined || name === null || name.length === 0) {
        return "Hello, my friend.";
    } else {
        return "Hello " + name + " !";
    }
}

module.exports = greet;