'use strict'

describe 'Controller: DudeCtrl', ->

  # load the controller's module
  beforeEach module 'myangularApp'

  DudeCtrl = {}

  scope = {}

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    DudeCtrl = $controller 'DudeCtrl', {
      # place here mocked dependencies
    }

  it 'should attach a list of awesomeThings to the scope', ->
    expect(DudeCtrl.awesomeThings.length).toBe 3
