const fileSys = require('fs');

const validateInput = (input) => {
  if ((input === null) || (input === undefined)) {
    return false;
  }
  return true;
};

const calcNewLine = (filePath) => {
  if (!validateInput(filePath)) {
    return filePath;
  }
  const buff = fileSys.readFileSync(filePath);
  const str = buff.toString().split('\n');
  return str.length - 1;
};

module.exports = calcNewLine;
