'use strict';

describe('NewsletterCtrl', function() {
  beforeEach(module('bojApp'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('$scope.dummy', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('NewsletterCtrl', { $scope: $scope });
    });

  });
});
