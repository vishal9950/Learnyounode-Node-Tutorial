const bl = require('bl');
const http = require('http');

const httpCollect = (url, callback) => {
  http.get(url, (response) => {
    response.pipe(bl((Err, data) => {
      callback('DATA');
      const dataRecvd = data.toString();
      console.log(dataRecvd.length);
      console.log(dataRecvd);
    }));
  });
};

module.exports = httpCollect;
