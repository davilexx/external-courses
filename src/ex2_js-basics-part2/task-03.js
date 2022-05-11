const evenOddZeroCount = (arr) => {
  let i = 0;
  let even = 0;
  let odd = 0;
  let zero = 0;
  const result = [];

  while (i < arr.length) {
    if (arr[i] === 0) {
      zero += 1;
    } else if (arr[i] % 2 === 0 && arr[i] !== null) {
      even += 1;
    } else if (arr[i] % 2 !== 0) {
      odd += 1;
    }
    i += 1;
  }

  console.log(`чётных: ${even}, нечётных: ${odd}, нуль: ${zero}`);

  result.push(even, odd, zero);
  return result;
};

module.exports = evenOddZeroCount;
