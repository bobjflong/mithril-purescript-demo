"use strict";

// module Mithril

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

exports.pages = function(x) {
  return x.pages();
};
