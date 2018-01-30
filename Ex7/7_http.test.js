const asyncHTTP = require('./7_http');

describe('Funcitonality of http.get: ', () => {
  test('Verify data for successful get request: ', (done) => {
    const callback1 = (data) => {
      expect(data).toBe('data stream');
      done();
    };
    asyncHTTP('http://www.google.com', callback1);
  });
});
