const calcNewLines = require('./4_async');

describe('Arguments Validation: ', () => {
  test('Should not work for null args: ', () => {
    expect(calcNewLines(null)).toBe(false);
  });

  test('Should not work for undefined args: ', () => {
    expect(calcNewLines(undefined)).toBe(false);
  });
});
