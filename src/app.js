/* eslint-disable linebreak-style */

function greet(names) {
    if (names.length === 1 || names.length === 0) {
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
    } else if (names.length === 2) {
        return greet2Names(names);
    } else {
        return greet3names(names);
    }
}

function greet2Names(names) {
    let upperNames = names.map((name) => name.toUpperCase());
    if (upperNames[0] === names[0]) {
        return 'HELLO, ' + upperNames[0] + '!';
    } else if (upperNames[1] === names[1]) {
        return 'HELLO, ' + upperNames[1] + '!';
    } else {
        return 'Hello, ' + names[0] + ' and ' + names[1] + '.';
    }
}

function greet3names(names) {
    let normalNames = [];
    let upperNames = [];

    names.forEach((name) => {
        let upperName = name.toUpperCase();
        if (upperName === name) {
            upperNames.push(upperName);
        } else {
            normalNames.push(name);
        }
    });

    let normalGreeting = 'Hello,';

    if (normalNames.length > 0) {
        for (let i = 0; i < normalNames.length; i++) {
            if (i === normalNames.length - 1) {
                normalGreeting += ' and ' + normalNames[i] + '.';
            } else if (i === normalNames.length - 2) {
                normalGreeting += ' ' + normalNames[i];
            } else {
                normalGreeting += ' ' + normalNames[i] + ',';
            }
        }
    }

    let upperGreeting = 'AND HELLO ' + upperNames.join('! AND HELLO ') + '!';

    if (normalNames.length > 0 && upperNames.length > 0) {
        return normalGreeting + ' ' + upperGreeting;
    } else if (normalNames.length > 0) {
        return normalGreeting;
    } else {
        return upperGreeting;
    }
}

module.exports = greet;