'use strict'

###*
 # @ngdoc function
 # @name myangularApp.controller:DudeCtrl
 # @description
 # # DudeCtrl
 # Controller of the myangularApp
###
angular.module 'myangularApp'
  .controller 'DudeCtrl', ->
    @awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
    return
