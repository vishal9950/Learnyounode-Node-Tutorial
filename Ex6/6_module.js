const validateInput = (input) => {
  if ((input === null) || (input === undefined)) {
    console.log(`Err1: ${input} args supplied`);
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
