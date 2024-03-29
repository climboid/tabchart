'use strict';

describe('Directive: chart', function () {

  // load the directive's module
  beforeEach(module('tabchartApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<chart></chart>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the chart directive');
  }));
});
