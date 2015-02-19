'use strict';

/**
 * @ngdoc directive
 * @name tabchartApp.directive:linechart
 * @description
 * # linechart
 */
angular.module('tabchartApp')
  .directive('linechart', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        
        d3.select(element[0]).append("svg")
      		.attr("width", 50)
      		.attr("height", 50)
      		.append("circle")
      		.attr("cx", 25)
      		.attr("cy", 25)
      		.attr("r", 25)
      		.style("fill", "red");
      }
    };
  });
