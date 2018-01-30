const asyncHTTP = require('./7_http');

describe('Funcitonality of http.get: ', () => {
  test('Verify data for successful get request: ', (done) => {
    const callback = (data) => {
      expect(data).toBe('data stream');
      done();
    };
    asyncHTTP('http://www.google.com', callback);
  });

  // test('should return error if wrong', (done) => {
  //   const callback = (data) => {
  //     expect(data).toBe('ERROR');
  //     done();
  //   };
  //   asyncHTTP('http://httpstat.us/404', callback);
  // });
});
