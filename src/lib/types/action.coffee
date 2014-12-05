request  = require('request')
Q        = require('q')
schemajs = require('schemajs')

class Action
  $name: ''
  $controller: null
  $parameters: {}
  constructor: (controller, name, parameters) ->
    @$name = name
    @$controller = controller
    @$parameters = parameters
    @$controller[name.split('-').join('')] = @call
    @call.$action = @
  call: (context, data) ->
    deferred = Q.defer()
    body = {}
    if @$parameters
      form = schemajs.test(data, @$parameters)
      if not form.valid
        deferred.reject(form.errors)
        return deferred.promise
        # input because schemajs.test uses {input:value}
      body = form.data && form.data.input
    options = {
      qs: {
        api_key: context.apiKey
      }
      form: body
      method: 'POST'
    }
    console.log(options)
    request.post(
      "#{context.url}/#{@$controller.$version}/#{@$controller.$name}/#{@$name}",
      options,
      (err, response, body) ->
        if err
          return deferred.reject(err)
        if response.statusCode isnt 200
          return deferred.reject(new Error("Responded with #{response.statusCode}"))
        deferred.resolve(body)
    )
    return deferred.promise



module.exports = Action