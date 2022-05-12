const checkEqual = (arr) => {
  let equalFlag = true;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] !== arr[j]) {
        equalFlag = false;
      }
    }
  }
  return equalFlag;
};

module.exports = checkEqual;
