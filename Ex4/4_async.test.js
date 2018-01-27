const calcNewLines = require('./4_async');

describe('Arguments Validation: ', () => {
  test('Should not work for null args: ', () => {
    expect(calcNewLines(null)).toBe(false);
  });

  test('Should not work for undefined args: ', () => {
    expect(calcNewLines(undefined)).toBe(false);
  });
});

describe('Path Validation: ', () => {
  test('Should not work if path to file does not exist: ', () => {
    expect(calcNewLines('./Ex4/test.txt')).toBe(false);
  });
});
