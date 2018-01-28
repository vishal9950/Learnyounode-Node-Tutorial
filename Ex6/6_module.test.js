const filesLS = require('./6_module');

describe('Argument Validation: ', () => {
  test('Should not work for null args: ', () => {
    expect(filesLS(null)).toBe(false);
  });

  test('Should not work for undefined args: ', () => {
    expect(filesLS(undefined)).toBe(false);
  });
});
