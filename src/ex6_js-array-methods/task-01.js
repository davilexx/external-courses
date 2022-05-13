const sliceFunc = (array, begin = 0, end = array.length) => {
  const newArray = [];
  let sliceBegin = begin;
  let sliceEnd = end;

  if (sliceBegin < 0 && Math.abs(sliceBegin) > array.length) {
    sliceBegin = 0;
  }

  if (sliceBegin > 0 && sliceBegin > array.length) {
    sliceBegin = array.length;
  }

  if (Math.abs(sliceEnd) > array.length) {
    sliceEnd = array.length;
  }

  if (sliceBegin < 0 && sliceEnd < 0) {
    sliceBegin = array.length - Math.abs(sliceBegin);
    sliceEnd = array.length - Math.abs(sliceEnd);
  }

  for (let i = sliceBegin; i < sliceEnd; i += 1) {
    newArray.push(array[i]);
  }

  return newArray;
};

module.exports = sliceFunc;
