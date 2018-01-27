const fs = require('fs');

const validateInput = (input) => {
  if ((input === null) || (input === undefined)) {
    console.log(`Err1: ${input} args provided!`);
    return false;
  }
  return true;
};

const pathValidtion = path => fs.existsSync(path, (exists) => {
  if (exists) {
    return true;
  }
  console.log('Err2: path not found');
  return false;
});

const filtered = (input, extension) => {
  if (!validateInput(input)) {
    return false;
  }
  if (!pathValidtion(input)) {
    return false;
  }
  fs.readdir(input, (err, files) => {
    if (err) {
      console.log(err);
      return false;
    }
    for (let i = 0; i < files.length; i += 1) {
      if (files[i].endsWith(extension)) {
        console.log(files[i]);
      }
    }
    return true;
  });
  return true;
};

const ext = `.${process.argv[3]}`;
const path = process.argv[2];
filtered(path, ext);

module.exports = filtered;
