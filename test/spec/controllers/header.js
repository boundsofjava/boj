'use strict';

describe('HeaderCtrl', function() {
  beforeEach(module('bojApp'));

  var $controller, $location;

  beforeEach(inject(function(_$controller_, _$location_) {
    $controller = _$controller_;
    $location = _$location_;
    $location.url('/some/path?param1=fruit&param2=vegetables');
  }));

  describe('$scope.isActive', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('HeaderCtrl', { $scope: $scope }, $location);
    });

    it('returns true when viewLocation starts with $location.path()', function() {
      var result = $scope.isActive('/some/path');
      expect(result).toBe(true);
    });

    it('returns false when viewLocation does not start with $location.path()', function() {
      var result = $scope.isActive('/some/other/path');
      expect(result).toBe(false);
    });

  });

  describe('$scope.isEnabled', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('HeaderCtrl', { $scope: $scope }, $location);
    });

    it('returns false when viewLocation equals /courses', function() {
      var result = $scope.isEnabled('/courses');
      expect(result).toBe(false);
    });

    it('returns true when viewLocation differs from /courses', function() {
      var result = $scope.isEnabled('/anything-but-courses');
      expect(result).toBe(true);
    });

  });

});
