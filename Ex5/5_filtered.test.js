const filtered = require('./5_filtered');

describe('Arguments Validation: ', () => {
  test('Should not work for null args: ', () => {
    expect(filtered(null)).toBe(false);
  });

  test('Should not work for undefined args: ', () => {
    expect(filtered(undefined)).toBe(false);
  });
});
