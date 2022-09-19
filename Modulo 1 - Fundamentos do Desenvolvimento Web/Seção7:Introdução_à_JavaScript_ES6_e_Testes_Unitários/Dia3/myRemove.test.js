const myRemove = require('./myRemove');

describe('Function myRemove', () => {
  test('Remove 3 from [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  test('myRemove([1, 2, 3, 4], 3) does NOT return [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })
})