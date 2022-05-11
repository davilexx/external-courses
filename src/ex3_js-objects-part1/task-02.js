const displayObject = (obj) => {
  Object.keys(obj).forEach((key) => {
    console.log(key, obj[key]);
  });
};

module.exports = displayObject;
