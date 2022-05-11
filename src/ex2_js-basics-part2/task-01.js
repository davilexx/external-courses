const checkType = (value) => {
  if (Number.isNaN(value)) {
    return undefined;
  }
  switch (typeof value) {
    case 'number':
      return 'number';
    case 'string':
      return 'string';
    default:
      return undefined;
  }
};

module.exports = checkType;
