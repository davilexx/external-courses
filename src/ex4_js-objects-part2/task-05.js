const stringsMatch = (str1, str2) => {
  if (str1.match(str2)) {
    return true;
  }
  return false;
};

module.exports = stringsMatch;
