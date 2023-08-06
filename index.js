const path = require('path');
const plopFilePath = path.resolve(__dirname, 'plopfile.js');

module.exports = (plop) => {
  plop.load(plopFilePath);
};
