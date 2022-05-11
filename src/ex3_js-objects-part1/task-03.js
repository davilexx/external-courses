const checkIfEqual = (str, obj) => {
  let value;
  Object.keys(obj).forEach((key) => {
    value = key === str;
  });
  return value || false;
};

module.exports = checkIfEqual;
