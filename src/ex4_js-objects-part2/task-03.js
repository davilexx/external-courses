const removeSpaces = (str) => str.split('').slice(1).reverse().slice(1)
  .reverse()
  .join('');

module.exports = removeSpaces;
