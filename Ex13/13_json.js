const http = require('http');
const url = require('url');

const getUnixTime = isoTime => ({
  unixtime: Date.parse(isoTime),
});

const getParsedTime = (strtime) => {
  const date = new Date(Date.parse(strtime));
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  };
};

const server = http.createServer((request, response) => {
  const urlObj = url.parse(request.url, true);
  // const pathName = urlObj.pathName;
  // isoTime = urlObj.query.iso;
  // res;
  const pName = urlObj.pathname;
  const strTime = urlObj.query.iso;
  res = '';

  if (pName === '/api/parsetime') {
    res = getParsedTime(strTime);
  } else if (pName === '/api/unixtime') {
    res = getUnixTime(strTime);
  }

  if (res) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(res));
  } else {
    response.writeHead(404);
    response.end();
  }
});

server.listen(process.argv[2]);
