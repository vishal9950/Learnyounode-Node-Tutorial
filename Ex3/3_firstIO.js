const validateInput = (input) => {
  if (input === null) {
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
