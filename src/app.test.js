/* eslint-disable linebreak-style */
const greet = require('./app');

test('should return an greet with the correct name ', () => {
    const result = greet("Bob");
    expect(result).toEqual("Hello Bob !");
});

test('should return : Hello, my friend.', () => {
    const result = greet();
    expect(result).toEqual("Hello, my friend.");
});