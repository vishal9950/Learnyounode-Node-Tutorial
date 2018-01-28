const validateInput = (input) => {
  if (input === null) {
    console.log('Err1: null args supplied');
    return false;
  }
  return true;
};

const filesLS = (args) => {
  if (!validateInput(args)) {
    return false;
  }
  return true;
};

module.exports = filesLS;
