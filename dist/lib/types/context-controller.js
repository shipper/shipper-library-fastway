(function() {
  var Action, ContextController;

  Action = require('./action');

  ContextController = (function() {
    ContextController.prototype.$context = null;

    ContextController.prototype.$controller = null;

    function ContextController(context, controller) {
      var key;
      this.$context = context;
      this.$controller = controller;
      for (key in controller) {
        if (!controller.hasOwnProperty(key)) {
          continue;
        }
        if (!(controller[key].$action instanceof Action)) {
          continue;
        }
        this[key] = this.$wrap(controller[key].$action);
      }
    }

    ContextController.prototype.$wrap = function(action) {
      return (function(_this) {
        return function(request) {
          return action.call(_this.$context, request);
        };
      })(this);
    };

    return ContextController;

  })();

  module.exports = ContextController;

}).call(this);
