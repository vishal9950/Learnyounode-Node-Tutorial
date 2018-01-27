const validateInput = (input) => {
  if (input === null) {
    console.log('Err1: null arg supplied!');
    return false;
  }
  return true;
};

const calcNewLines = (input) => {
  if (!validateInput(input)) {
    return false;
  }
  return true;
};

module.exports = calcNewLines;
