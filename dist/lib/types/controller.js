(function() {
  var Controller;

  Controller = (function() {
    Controller.prototype.$version = 1;

    Controller.prototype.$name = '';

    function Controller(version, name) {
      this.$version = version;
      this.$name = name;
    }

    Controller["new"] = function(version, name) {
      return new Controller(version, name);
    };

    return Controller;

  })();

  module.exports = Controller;

}).call(this);
