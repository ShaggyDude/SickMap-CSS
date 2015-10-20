'use strict';

/**
 * @ngdoc overview
 * @name myangularApp
 * @description
 * # myangularApp
 *
 * Main module of the application.
 */
angular
  .module('myangularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'hc.marked'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/dude', {
        templateUrl: 'views/dude.html',
        controller: 'DudeCtrl',
        controllerAs: 'dude'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
