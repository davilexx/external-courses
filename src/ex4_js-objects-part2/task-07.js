const shortenStr = (str, num) => {
  if (str.length > num) {
    return str.split('').reverse().slice(str.length + 1 - num).reverse()
      .join('')
      .concat('…');
  }
  return str;
};

module.exports = shortenStr;
