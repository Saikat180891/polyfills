Array.prototype.myFind = function(callback) {
  let found;
  for (let i = 0; i < this.length; i++) {
    found = callback(this[i], i, this);
    if (found) {
      return found[0];
    }
  }
};
