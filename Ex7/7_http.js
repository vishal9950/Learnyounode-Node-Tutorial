const http = require('http');

const asyncHTTP = (url, testCallback) => {
  http.get(url, (response) => {
    // console.log(process.argv[2]);
    response.setEncoding('utf8');
    const result = [];
    response.on('data', (data) => {
      result.push(data);
      testCallback('data stream');
    });

    // response.on('end', () => {
    //   result.forEach(value => console.log(value));
    //   testCallback('ERROR');
    // });
    //
    // response.on('error', () => {
    //   testCallback('ERROR');
    // });
  });
};

module.exports = asyncHTTP;
