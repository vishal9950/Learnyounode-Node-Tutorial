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
  return true;
};

module.exports = calcNewLine;
