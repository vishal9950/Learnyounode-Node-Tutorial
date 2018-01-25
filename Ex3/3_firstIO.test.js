const calcNewLine = require('./3_firstIO');

describe('Argument Validation: ', () => {
  test('Should not work for null args: ', () => {
    expect(calcNewLine(null)).toBe(null);
  });

  test('Should not work for undefined args: ', () => {
    expect(calcNewLine(undefined)).toBe(undefined);
  });
});
