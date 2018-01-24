const sum = require('./2_baby');

describe('Check console.log', () => {
  test('console should be called with the sum 6: ', () => {
    global.console.log = jest.fn();
    global.process.argv = ['abc', 'xyz', 1, 2, 3];
    sum();
    expect(console.log).toHaveBeenCalledWith(6);
  });

  test('Should be called twice: ', () => {
    sum();
    expect(console.log.mock.calls.length).toBe(2);
  });

  test('console should be called with the sum 4: ', () => {
    global.console.log = jest.fn();
    global.process.argv = ['abc', 'xyz', -1, 2, 3];
    sum();
    expect(console.log).toHaveBeenCalledWith(4);
  });
});

describe('Check return type of sum: ', () => {
  test('Should work for expected args: ', () => {
    expect(sum()).toBe(undefined);
  });
});
