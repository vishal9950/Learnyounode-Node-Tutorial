const sum = () => {
  const input = process.argv.slice(2);
  const addNumbers = input.map(str => Number(str));
  const result = addNumbers.reduce((acc, preVal) => acc + preVal);
  console.log(result);
};

sum();

module.exports = sum;
