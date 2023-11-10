/* eslint-disable linebreak-style */

function greet(names) {
    if (names.length === 1 || names.length ===0) {
        if (
            names[0] === undefined ||
            names[0] === '' ||
            names[0] === null ||
            names.length === 0
        ) {
            return 'Hello, my friend.';
        }

        let upperName = names[0].toUpperCase();

        if (upperName === names[0]) {
            return 'HELLO, ' + upperName + '!';
        } else {
            return 'Hello ' + names[0] + ' !';
        }
    }else if (names.length === 2) {
        return greet2Names(names);
    }else

    return greet3names(names);
}

function greet2Names(names) {
    return "Hello, " +  names[0] + " and " + names[1] + ".";
}

function greet3names(names){
    return "Hello, " + names[0] + ", " + names[1] + " and " + names[2] +"."; 
}

module.exports = greet;