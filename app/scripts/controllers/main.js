'use strict';

/**
 * @ngdoc function
 * @name tabchartApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tabchartApp
 */
angular.module('tabchartApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
