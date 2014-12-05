(function() {
  var Context, Controller, FastLabel, PSC, self;

  Context = require('./lib/types/context');

  Controller = require('./lib/types/controller');

  FastLabel = require('./lib/fast-label');

  PSC = require('./lib/price-service-calculator');

  self = {
    createContext: function(api_key, url) {
      return new Context(api_key, url);
    },
    create: function(api_key, url) {
      var context, key, _results;
      context = self.createContext(api_key, url);
      _results = [];
      for (key in self) {
        if (!self.hasOwnProperty(key)) {
          continue;
        }
        if (!(self[key] instanceof Controller)) {
          continue;
        }
        _results.push(context[key] = context.controller(self[key]));
      }
      return _results;
    },
    FastLabel: FastLabel,
    PSC: PSC
  };

  module.exports = self;

}).call(this);
