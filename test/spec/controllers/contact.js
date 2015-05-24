'use strict';

describe('ContactCtrl', function() {
  beforeEach(module('bojApp'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('$scope.dummy', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('ContactCtrl', { $scope: $scope });
    });

    it('always sets dummyStr to "dummy"', function() {
      expect($scope.dummyStr).toBeUndefined();
      $scope.dummy();
      expect($scope.dummyStr).toEqual('dummy');
    });

  });
});