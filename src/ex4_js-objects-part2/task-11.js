const countEqualLetters = (str) => {
  const arr = str.split('');
  for (let i = 0; i < arr.length; i += 1) {
    let count = 0;
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] === arr[j]) {
        count += 1;
      }
    }
    console.log(`a symbol ${arr[i]} appears in a string ${count} times`);
    arr.splice(i, 1);
  }
};

module.exports = countEqualLetters;
