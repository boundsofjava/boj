'use strict';

describe('BlogCtrl', function() {
  beforeEach(module('bojApp'));

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('$scope.posts', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('BlogCtrl', { $scope: $scope });
    });

    it('has only one post at the beginning', function() {
      expect($scope.posts.length).toEqual(1);
    });

    it('adds one post when scrolling down', function() {
      $scope.loadPost();
      expect($scope.posts.length).toEqual(2);
    });

    it('adds posts in descending order by date', function() {
      $scope.loadPost();
      var newer = $scope.posts[0];
      var older = $scope.posts[1];
      expect(older.date).toBeLessThan(newer.date);
    });

  });
});
