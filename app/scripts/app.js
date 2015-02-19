'use strict';

/**
 * @ngdoc overview
 * @name tabchartApp
 * @description
 * # tabchartApp
 *
 * Main module of the application.
 */
angular
  .module('tabchartApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
