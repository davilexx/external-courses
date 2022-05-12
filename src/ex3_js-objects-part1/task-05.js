const copy = (obj) => {
  const copiedObj = Object.create(obj);
  return copiedObj;
};

module.exports = copy;
