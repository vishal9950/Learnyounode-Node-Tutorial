const logger = require('./1_hello');

describe('Functionality of console.log: ', () => {
  test('Should call console.log', () => {
    global.console.log = jest.fn();
    logger('HELLO WORLD');
    expect(global.console.log).toHaveBeenCalledWith('HELLO WORLD');
  });
});
