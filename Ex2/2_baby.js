const sum = () => {
  const input = process.argv.slice(2);
  let addNumbers = input.map(str => Number(str));
  addNumbers = input.reduce((acc, preVal) => acc + preVal);
  console.log(addNumbers);
};

module.exports = sum;
