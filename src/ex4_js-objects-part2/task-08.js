const lowerCamelCase = (str) => {
  const newStr = str.toLowerCase().split(' ').map((el) => el.charAt(0).toUpperCase() + el.slice(1)).join('');
  const lowerCase = newStr.charAt(0).toLowerCase();

  return lowerCase.concat(newStr.slice(1));
};

module.exports = lowerCamelCase;
