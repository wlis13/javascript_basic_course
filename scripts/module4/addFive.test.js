const { default: TestRunner } = require('jest-runner');

const { addFive, addTaks } = require('./addFive.js');

test('returns the number plus 5', () => {
  expect(addFive(1)).toBe(6);
});

test('returns with the negative value plus 5', () => {
  expect(addFive(-2)).toBe(3);
})