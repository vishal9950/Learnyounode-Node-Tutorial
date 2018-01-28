const net = require('net');

const zeroFilled = (input) => {
  if (input < 10) {
    return `0${input}`;
  }
  return input;
};


const server = net.createServer((socket) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = zeroFilled(date.getMonth() + 1);
  const day = zeroFilled(date.getDate());
  const hour = zeroFilled(date.getHours());
  const mins = zeroFilled(date.getMinutes());
  const str = `${year}-${month}-${day} ${hour}:${mins}`;
  socket.write(str);
  socket.end('\n');
});
server.listen(process.argv[2]);
