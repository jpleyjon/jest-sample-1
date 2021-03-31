const Dummy = require('./Dummy');
require('jest');

test('Properly adds two numbers', () => {
  expect(Dummy.sum(1, 2)).toBe(3);
});

test('Properly substract two number', () => {
  expect(Dummy.sub(2, 1)).toBe(1);
});

test('Properly clones array', () => {
  const array = [1,2,3];
  expect(Dummy.cloneArray(array)).toEqual(array);
  expect(Dummy.cloneArray(array)).not.toBe(array);
})
