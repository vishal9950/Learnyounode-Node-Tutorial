const calcNewLine = require('./3_firstIO');

describe('Argument Validation: ', () => {
  test('Should not work for null args: ', () => {
    expect(calcNewLine(null)).toBe(null);
  });

  test('Should not work for undefined args: ', () => {
    expect(calcNewLine(undefined)).toBe(undefined);
  });
});

describe('Test functionality of calcNewLine: ', () => {
  test('Should work for a file with two new lines: ', () => {
    expect(calcNewLine('./Ex3/test1.txt')).toBe(2);
  });

  test('Should work for a file with no lines: ', () => {
    expect(calcNewLine('./Ex3/test2.txt')).toBe(0);
  });
});
