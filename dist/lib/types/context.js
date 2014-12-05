(function() {
  var Context, ContextController;

  ContextController = require('./context-controller');

  Context = (function() {
    Context.prototype.apiKey = null;

    Context.prototype.url = '';

    function Context(apiKey, url) {
      if (url == null) {
        url = 'http://api.fastway.org';
      }
      this.apiKey = apiKey;
      this.url = url;
    }

    Context.prototype.controller = function(controller) {
      return new ContextController(this, controller);
    };

    return Context;

  })();

  module.exports = Context;

}).call(this);
