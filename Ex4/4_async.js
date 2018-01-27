const fileSys = require('fs');

const pathExists = (path) => {
  fileSys.exists(path, (exists) => {
    if (exists) {
      return true;
    }
    console.log('Err2: Path not found!');
    return false;
  });
};

const validateInput = (input) => {
  if ((input === null) || (input === undefined)) {
    console.log(`Err1: ${input} arg supplied!`);
    return false;
  }
  return true;
};

const calcNewLines = (input) => {
  if (!validateInput(input)) {
    return false;
  }
  if (!pathExists(input)) {
    return false;
  }
  return true;
};

calcNewLines(process.argv[2]);
module.exports = calcNewLines;
