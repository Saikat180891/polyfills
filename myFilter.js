Array.prototype.myFilter = function(callback) {
  let filteredElements = [];
  for (let i = 0; i < this.length; i++) {
    let element = callback(this[i], i, this);
    if (element) {
      filteredElements.push(this[i]);
    }
  }
  return filteredElements;
};
