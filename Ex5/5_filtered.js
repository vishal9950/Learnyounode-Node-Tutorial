const fs = require('fs');

const validateInput = (input) => {
  if ((input === null) || (input === undefined)) {
    console.log(`Err1: ${input} args provided!`);
    return false;
  }
  return true;
};

const pathValidtion = (path) => {
  fs.existsSync(path, (exists) => {
    if (exists) {
      return true;
    }
    console.log('Err2: path not found');
    return false;
  });
};

const filtered = (input) => {
  if (!validateInput(input)) {
    return false;
  }
  if (!pathValidtion(input)) {
    return false;
  }
  return true;
};

module.exports = filtered;
