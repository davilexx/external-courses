const returnValue = (prop, obj) => {
  const objProto = obj.__proto__;
  if (objProto.hasOwnProperty(prop)) {
    return objProto[prop];
  }
  return undefined;
};

module.exports = returnValue;
