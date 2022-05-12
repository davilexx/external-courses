const addNewProp = (str, obj) => {
  const newObject = obj;

  if (!obj.hasOwnProperty(str)) {
    newObject[str] = 'new';
    return newObject;
  }

  Object.keys(obj).forEach((key) => {
    if (key !== str) {
      newObject[str] = 'new';
    }
  });

  return newObject;
};

module.exports = addNewProp;
