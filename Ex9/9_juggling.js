const http = require('http');

const urls = [process.argv[2], process.argv[3], process.argv[4]];
const result = [];
let counter = 0;

const asyncFunction = (url, index) => {
  http.get(url, (response) => {
    let dataRecvd = '';
    response.setEncoding('utf8');
    response.on('data', (data) => {
      dataRecvd += data;
    });
    response.on('end', () => {
      result[index] = dataRecvd;
      counter += 1;
      if (counter >= 3) {
        for (let i = 0; i < 3; i += 1) {
          console.log(result[i]);
        }
      }
    });
  });
};

for (let i = 0; i < 3; i += 1) {
  asyncFunction(urls[i], i);
}
