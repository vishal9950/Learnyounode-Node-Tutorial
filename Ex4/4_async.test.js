const calcNewLines = require('./4_async');

describe('Arguments Validation: ', () => {
  test('Should not work for null args: ', () => {
    expect(calcNewLines(null)).toBe(false);
  });
});
