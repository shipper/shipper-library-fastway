(function() {
  var Action, Controller;

  Controller = require('./types/controller')["new"](2, 'agent');

  Action = require('./types/action');

  new Action(Controller, 'testLogin', {
    Username: {
      type: 'string',
      required: true
    },
    Password: {
      type: 'string',
      required: true
    }
  });

  module.exports = Controller;

}).call(this);
