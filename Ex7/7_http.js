const http = require('http');

const asyncHTTP = (url, testCallback) => {
  http.get(url, (response) => {
    // console.log(process.argv[2]);
    response.setEncoding('utf8');

    response.on('data', (data) => {
      console.log(data);
      testCallback('data stream');
    });
  });
};

module.exports = asyncHTTP;
