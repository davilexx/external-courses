const addOneStringIntoAnother = (str1, str2, position) => {
  const arr = str1.split(' ');
  arr.splice(position + 1, 0, str2);
  return arr.join(' ');
};

module.exports = addOneStringIntoAnother;
