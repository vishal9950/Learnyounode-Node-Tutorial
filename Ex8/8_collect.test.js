const httpCollect = require('./8_collect');

describe('Fucntionality of httpCollect: ', () => {
  test('Should work for successful request: ', (done) => {
    const callback = (data) => {
      expect(data).toBe('DATA');
      done();
    };
    httpCollect('http://www.google.com', callback);
  });
});
