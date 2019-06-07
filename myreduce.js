Array.prototype.myReduce = function(callback) {
  let value = 0;
  for (let i = 0; i < this.length; i++) {
    value = callback(value, this[i], i, this);
  }

  return value;
};
