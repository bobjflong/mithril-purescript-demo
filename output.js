// Generated by psc-bundle 0.7.4.1
var PS = { };
(function(exports) {
  "use strict";

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
 
})(PS["Mithril"] = PS["Mithril"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Mithril"];
  var Control_Monad_Eff = PS["Control.Monad.Eff"];
  exports["nullary"] = $foreign.nullary;
  exports["mithrilMount"] = $foreign.mithrilMount;
  exports["mithrilDomLink"] = $foreign.mithrilDomLink;
  exports["mithrilRequest"] = $foreign.mithrilRequest;;
 
})(PS["Mithril"] = PS["Mithril"] || {});
(function(exports) {
  /* global exports */
  "use strict";

  // module Prelude

  //- Functor --------------------------------------------------------------------

  exports.arrayMap = function (f) {
    return function (arr) {
      var l = arr.length;
      var result = new Array(l);
      for (var i = 0; i < l; i++) {
        result[i] = f(arr[i]);
      }
      return result;
    };
  };
 
})(PS["Prelude"] = PS["Prelude"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var $foreign = PS["Prelude"];
  var Functor = function (map) {
      this.map = map;
  };
  var map = function (dict) {
      return dict.map;
  };
  var functorArray = new Functor($foreign.arrayMap);
  exports["Functor"] = Functor;
  exports["map"] = map;
  exports["functorArray"] = functorArray;;
 
})(PS["Prelude"] = PS["Prelude"] || {});
(function(exports) {
  // Generated by psc version 0.7.4.1
  "use strict";
  var Mithril = PS["Mithril"];
  var Prelude = PS["Prelude"];
  var Control_Monad_Eff_Console = PS["Control.Monad.Eff.Console"];     
  var post2Dom = function (x) {
      return Mithril.mithrilDomLink({
          href: x.id
      })(x.title);
  };
  var view = function (x) {
      return Prelude.map(Prelude.functorArray)(post2Dom)(Mithril.nullary(x)("pages"));
  };
  var api = "http://jsonplaceholder.typicode.com/posts";
  var app = {
      page_list: Mithril.mithrilRequest({
          method: "GET", 
          url: api
      }), 
      controller: function (_0) {
          return {
              pages: app.page_list
          };
      }, 
      view: view
  };
  var main = function (_1) {
      return Mithril.mithrilMount("main")(app);
  };
  exports["main"] = main;
  exports["view"] = view;
  exports["post2Dom"] = post2Dom;
  exports["app"] = app;
  exports["api"] = api;;
 
})(PS["Main"] = PS["Main"] || {});

PS["Main"].main();
