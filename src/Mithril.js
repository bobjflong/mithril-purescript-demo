"use strict";

// module Mithril

exports.calculateInterest = function(amount) {
  return amount * 0.1;
};

exports.mithrilRequest = function(x) {
  return m.request(x);
};

exports.mithrilDomLink = function(x) {
  return function(y) {
    return m("a", x, y);
  };
};

exports.mithrilMount = function(x) {
  return function(y) {
    return m.mount(document.getElementById(x), y);
  };
};

exports.nullary = function(x) {
  return function(y) {
    return x[y]();
  };
};
