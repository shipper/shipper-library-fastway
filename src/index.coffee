Context    = require('./lib/types/context')
Controller = require('./lib/types/controller')
FastLabel  = require('./lib/fast-label')
PSC        = require('./lib/price-service-calculator')
Agent      = require('./lib/remote-agent')

self =
  createContext: (api_key, url) ->
    return new Context(api_key, url)
  create: (api_key, url) ->
    context = self.createContext(api_key, url)
    for key of self
      if not self.hasOwnProperty(key)
        continue
      if self[key] not instanceof Controller
        continue
      context[key] = context.controller(self[key])
    return context
  FastLabel: FastLabel
  PSC: PSC
  Agent: Agent

module.exports = self