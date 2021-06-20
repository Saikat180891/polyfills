Array.prototype.myReduce = function(callback, initialValue) {
  let value = initialValue;
  for (let i = 0; i < this.length; i++) {
    value = callback(value, this[i], i, this);
  }

  return value;
};
