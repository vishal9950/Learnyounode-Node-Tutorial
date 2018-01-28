const bl = require('bl');
const http = require('http');

http.get(process.argv[2], (response) => {
  response.pipe(bl((Err, data) => {
    const dataRecvd = data.toString();
    console.log(dataRecvd.length);
    console.log(dataRecvd);
  }));
});
