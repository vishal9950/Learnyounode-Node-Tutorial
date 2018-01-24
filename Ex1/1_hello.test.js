const logger = require('./1_hello');

describe('Functionality of console.log: ', () => {
  test('Should call console.log for a string: ', () => {
    global.console.log = jest.fn();
    logger('HELLO WORLD');
    expect(global.console.log).toHaveBeenCalledWith('HELLO WORLD');
  });

  test('Should call console.log a number: ', () => {
    global.console.log = jest.fn();
    logger(1234);
    expect(global.console.log).toHaveBeenCalledWith(1234);
  });
});
