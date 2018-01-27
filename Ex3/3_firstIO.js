const fileSys = require('fs');

const pathExists = path => fileSys.existsSync(path, (exists) => {
  if (exists) {
    return true;
  }
  console.log('Err2: File not found on specified path');
  return false;
});

const validateInput = (input) => {
  if ((input === null) || (input === undefined)) {
    console.log(`Err1: ${input} argument supplied`);
    return false;
  }
  return true;
};

const calcNewLine = (filePath) => {
  if (!validateInput(filePath)) {
    return filePath;
  }
  if (!pathExists(filePath)) {
    return false;
  }
  const buff = fileSys.readFileSync(filePath);
  const str = buff.toString().split('\n');
  return str.length - 1;
};

const pathToFile = process.argv[2];
console.log(calcNewLine(pathToFile));

module.exports = calcNewLine;
