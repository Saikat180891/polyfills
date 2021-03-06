Function.prototype.myBind = function(...args) {
  let self = this;
  return function() {
    self.apply(args[0], args.slice(1));
  };
};
