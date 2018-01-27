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
  return true;
};

module.exports = calcNewLines;
