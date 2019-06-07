Function.prototype.myCall = function(...args) {
  args[0].fn = this;
  let otherItems = args.slice(1);
  args[0].fn(otherItems);
};
