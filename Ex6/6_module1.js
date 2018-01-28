const modular = require('./6_module');

const directory = process.argv[2];
const extension = process.argv[3];
modular(directory, extension, (err, data) => {
  if (err) { console.log('error'); } else {
    data.forEach(file => console.log(file));
  }
});
module.exports = modular;
