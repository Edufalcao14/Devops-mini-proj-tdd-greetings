/* eslint-disable linebreak-style */
const greet = require('./app');

test('should return an greet with the correct name ', () => {
    const result = greet(["Bob"]);
    expect(result).toEqual("Hello Bob !");
});

test('should return : Hello, my friend.', () => {
    const result = greet([""]);
    expect(result).toEqual("Hello, my friend.");
});

test('should return : HELLO, JERRY!', () => {
    const result = greet(["JERRY"]);
    expect(result).toEqual("HELLO, JERRY!");
});

test('should return : Hello, Jill and Jane.', () => {
    const result = greet( ["Jill", "Jane"],);
    expect(result).toEqual("Hello, Jill and Jane.");
});

test('should return : Hello, Amy, Brian and Charlotte.', () => {
    const result = greet(  ["Amy", "Brian","Charlotte"],);
    expect(result).toEqual("Hello, Amy, Brian and Charlotte.");
});

test('should return : Hello, Amy, Charlotte. AND HELLO BRIAN!', () => {
    const result = greet(  ["Amy", "BRIAN","Charlotte"],);
    expect(result).toEqual("Hello, Amy and Charlotte. AND HELLO BRIAN!");
});