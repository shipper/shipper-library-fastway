Action = require('./action')

class ContextController
  $context: null
  $controller: null
  constructor: (context, controller) ->
    @$context = context
    @$controller = controller
    for key of controller
      if not controller.hasOwnProperty(key)
        continue
      if controller[key].$action not instanceof Action
        continue
      @[key] = @$wrap(controller[key].$action)
  $wrap: (action) ->
    return (request) =>
      action.call(@$context, request)



module.exports = ContextController