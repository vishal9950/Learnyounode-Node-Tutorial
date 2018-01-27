const validateInput = (input) => {
  if ((input === null) || (input === undefined)) {
    console.log(`Err1: ${input} args provided!`);
    return false;
  }
  return true;
};

const filtered = (input) => {
  if (!validateInput(input)) {
    return false;
  }
  return true;
};

module.exports = filtered;
