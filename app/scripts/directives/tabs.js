'use strict';

/**
 * @ngdoc directive
 * @name tabchartApp.directive:tabs
 * @description
 * # tabs
 */
angular.module('tabchartApp')
  .directive('tabs', function () {
    return {
      templateUrl: '../views/tabs.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	console.log('directive tabs was injected');
      }
    };
  });
