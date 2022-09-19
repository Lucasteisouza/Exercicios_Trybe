const sum = require('./sum');

describe ('Tests sum function', () => {
  test('if 9 is the result of sum(4,5)', () => {
    expect(sum(4,5)).toBe(9);
  })
  test('if 0 is the result of sum(0,0)', () => {
    expect(sum(0,0)).toBe(0);
  })
  test('if error is thrown when string is parameter', () => {
    expect(() => sum(5,'5')).toThrow('parameters must be numbers');
  })
})