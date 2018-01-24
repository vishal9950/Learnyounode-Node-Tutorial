const sum = require('./2_baby');

describe('Check console.log', () => {
  test('console should be called with the sum 6: ', () => {
    global.console.log = jest.fn();
    global.process.argv = ['abc', 'xyz', 1, 2, 3];
    sum();
    expect(console.log).toHaveBeenCalledWith(6);
  });
});
