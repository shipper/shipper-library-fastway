(function() {
  var Action, Q, request, schemajs;

  request = require('request');

  Q = require('q');

  schemajs = require('schemajs');

  Action = (function() {
    Action.prototype.$name = '';

    Action.prototype.$controller = null;

    Action.prototype.$parameters = {};

    function Action(controller, name, parameters) {
      this.$name = name;
      this.$controller = controller;
      this.$parameters = parameters;
      this.$controller[name.split('-').join('')] = this.call;
      this.call.$action = this;
    }

    Action.prototype.call = function(context, data) {
      var body, deferred, form, options;
      deferred = Q.defer();
      body = {};
      if (this.$parameters) {
        form = schemajs.test(data, this.$parameters);
        if (!form.valid) {
          deferred.reject(form.errors);
          return deferred.promise;
        }
        body = form.data && form.data.input;
      }
      options = {
        qs: {
          api_key: context.apiKey
        },
        form: body,
        method: 'POST'
      };
      console.log(options);
      request.post("" + context.url + "/" + this.$controller.$version + "/" + this.$controller.$name + "/" + this.$name, options, function(err, response, body) {
        if (err) {
          return deferred.reject(err);
        }
        if (response.statusCode !== 200) {
          return deferred.reject(new Error("Responded with " + response.statusCode));
        }
        return deferred.resolve(body);
      });
      return deferred.promise;
    };

    return Action;

  })();

  module.exports = Action;

}).call(this);
