const filesLS = require('./6_module');

filesLS(process.argv[2], process.argv[3], (err, data) => {
  if (err) {
    console.log(err.code);
    return false;
  }
  // data.forEach(element => console.log(element));
  console.log(data.toString());
  return true;
});
