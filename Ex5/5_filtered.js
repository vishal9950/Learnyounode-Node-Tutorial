const validateInput = (input) => {
  if (input === null) {
    console.log('Err1: null args provided!');
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
