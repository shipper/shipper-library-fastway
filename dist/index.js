(function() {
  var Agent, Context, Controller, FastLabel, PSC, self;

  Context = require('./lib/types/context');

  Controller = require('./lib/types/controller');

  FastLabel = require('./lib/fast-label');

  PSC = require('./lib/price-service-calculator');

  Agent = require('./lib/remote-agent');

  self = {
    createContext: function(api_key, url) {
      return new Context(api_key, url);
    },
    create: function(api_key, url) {
      var context, key;
      context = self.createContext(api_key, url);
      for (key in self) {
        if (!self.hasOwnProperty(key)) {
          continue;
        }
        if (!(self[key] instanceof Controller)) {
          continue;
        }
        context[key] = context.controller(self[key]);
      }
      return context;
    },
    FastLabel: FastLabel,
    PSC: PSC,
    Agent: Agent
  };

  module.exports = self;

}).call(this);
