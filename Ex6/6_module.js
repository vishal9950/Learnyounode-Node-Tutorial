const fs = require('fs');

const validateInput = (input) => {
  if ((input === null) || (input === undefined)) {
    console.log(`Err1: ${input} args supplied`);
    return false;
  }
  return true;
};

const pathExists = path => fs.exists(path, (exists) => {
  if (exists) {
    return true;
  }
  console.log('Err2: Path not found!');
  return false;
});

const filesLS = (filePath) => {
  if (!validateInput(filePath)) {
    return false;
  }
  if (!pathExists(filePath)) {
    return false;
  }
  return true;
};

module.exports = filesLS;
