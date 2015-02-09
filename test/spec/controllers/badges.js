'use strict';

describe('Controller: BadgesCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var BadgesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BadgesCtrl = $controller('BadgesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
