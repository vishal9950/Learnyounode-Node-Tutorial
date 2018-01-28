const filtered = require('./5_filtered');

describe('Arguments Validation: ', () => {
  test('Should not work for null args: ', () => {
    expect(filtered(null)).toBe(false);
  });

  test('Should not work for undefined args: ', () => {
    expect(filtered(undefined)).toBe(false);
  });
});

describe('Path Validation: ', () => {
  test('Should not work for the given path: ', () => {
    expect(filtered('./Exx4/')).toBe(false);
  });
});

describe('Funcitonality if filtered: ', () => {
  test('Should work for correct path: ', () => {
    expect(filtered('/Users/vishalvasnani/MDL/training/learnyounode/Ex4', '.txt')).toEqual(true);
  });
});
