const fs = require('fs');
const path = require('path');

const validateInput = (input) => {
  if ((input === null) || (input === undefined)) {
    console.log(`Err1: ${input} args supplied`);
    return false;
  }
  return true;
};

const pathExists = path => fs.exists(path, (exists) => {
  if (exists) {
    return true;
  }
  console.log('Err2: Path not found!');
  return false;
});

const filesLS = (filePath, extension) => {
  const ext = `.${extension}`;
  // console.log(ext);
  if ((!validateInput(filePath)) && (!validateInput(extension))) {
    // console.log(1);
    return false;
  }
  if (!pathExists(filePath)) {
    console.log(2);
    return false;
  }

  fs.readdir(filePath, (err, files) => {
    // const result = [];
    if (err) {
      console.log(err);
      return false;
    }
    for (let i = 0; i < files.length; i += 1) {
      if (path.extname(files[i]) === ext) {
        console.log(files[i]);
        // result.push(files[i]);
      }
    }
    return true;
    // for (let i = 0; i < result.length; i += 1) {
    //   console.log(result[i]);
    // }
    // return result;
  });
  return true;
};

module.exports = filesLS;
