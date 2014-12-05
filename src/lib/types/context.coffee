ContextController = require('./context-controller')

class Context
  apiKey: null
  url: ''
  constructor: (apiKey, url = 'http://api.fastway.org') ->
    @apiKey = apiKey
    @url = url
  controller: (controller) ->
    return new ContextController(@, controller)

module.exports = Context