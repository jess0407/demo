'use strict';

describe('Service: Badges', function () {

  // load the service's module
  beforeEach(module('demoApp'));

  // instantiate service
  var Badges;
  beforeEach(inject(function (_Badges_) {
    Badges = _Badges_;
  }));

  it('should do something', function () {
    expect(!!Badges).toBe(true);
  });

});
