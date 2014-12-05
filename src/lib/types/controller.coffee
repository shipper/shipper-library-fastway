class Controller
  $version: 1
  $name: ''
  constructor: (version, name) ->
    @$version = version
    @$name = name
  @new: (version, name) ->
    return new Controller(version, name)

module.exports = Controller