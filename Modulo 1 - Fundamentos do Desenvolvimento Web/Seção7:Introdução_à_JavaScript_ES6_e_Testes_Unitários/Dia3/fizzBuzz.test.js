const myFizzBuzz = require('./fizzBuzz');

test('número divisivel por 3 E 5 resultando em fizzBuzz', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
})

test('número divisivel por 3 resultando em fizz', () => {
  expect(myFizzBuzz(6)).toBe('fizz');
})

test('número divisivel por 5 resultando em buzz', () => {
  expect(myFizzBuzz(10)).toBe('buzz');
})

test('número divisivel por nem 3 nem 5 resultando em num', () => {
  expect(myFizzBuzz(7)).toBe(7);
})

test('parametro não numerico resultando em false', () => {
  expect(myFizzBuzz('opa')).toBe(false);
})