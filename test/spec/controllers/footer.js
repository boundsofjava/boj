'use strict';

describe('FooterCtrl', function() {
  beforeEach(module('bojApp'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('$scope.currentYear', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('FooterCtrl', { $scope: $scope });
    });

    it('initializes currentYear to "year of current date"', function() {
      expect($scope.currentYear).toEqual(new Date().getFullYear());
    });

  });
});
