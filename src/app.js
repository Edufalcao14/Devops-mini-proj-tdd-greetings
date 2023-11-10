/* eslint-disable linebreak-style */
const langages = ['fr', 'nl', 'en'];

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
    } else if (names.length === 3) {
        for (let name of names) {
            // Vérification si la valeur est présente dans la liste des langages
            if (langages.includes(name) && name === 'fr') {
                const filteredNames = names.filter((name) => name !== 'fr');
                return greet2NamesFrench(filteredNames);
            } else if (langages.includes(name) && name === 'nl'){
                const filteredNames = names.filter((name) => name !== 'nl');
                return greet2NamesNL(filteredNames);
            }
        }
        return greet3names(names);
    } else {
        return greet2Names(names);
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

function greet2NamesFrench(names) {
    let upperNames = names.map((name) => name.toUpperCase());
    if (upperNames[0] === names[0]) {
        return 'BONJOUR, ' + upperNames[0] + '!';
    } else if (upperNames[1] === names[1]) {
        return 'BONJOUR, ' + upperNames[1] + '!';
    } else {
        return 'Bonjour ' + names[0] + ' et ' + names[1] + '.';
    }
}

function greet2NamesNL(names){
    let upperNames = names.map((name) => name.toUpperCase());
    if (upperNames[0] === names[0]) {
        return 'HALLO, ' + upperNames[0] + '!';
    } else if (upperNames[1] === names[1]) {
        return 'HALLO, ' + upperNames[1] + '!';
    } else {
        return 'Hallo ' + names[0] + ' en ' + names[1] + '.';
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

    let normalGreetingEnglish = 'Hello,';

    if (normalNames.length > 0) {
        for (let i = 0; i < normalNames.length; i++) {
            if (i === normalNames.length - 1) {
                normalGreetingEnglish += ' and ' + normalNames[i] + '.';
            } else if (i === normalNames.length - 2) {
                normalGreetingEnglish += ' ' + normalNames[i];
            } else {
                normalGreetingEnglish += ' ' + normalNames[i] + ',';
            }
        }
    }

    let upperGreeting = 'AND HELLO ' + upperNames.join('! AND HELLO ') + '!';

    if (normalNames.length > 0 && upperNames.length > 0) {
        return normalGreetingEnglish + ' ' + upperGreeting;
    } else if (normalNames.length > 0) {
        return normalGreetingEnglish;
    } else {
        return upperGreeting;
    }
}

module.exports = greet;