'use strict';

angular.module('bojApp')
  .controller('NewsletterCtrl', function ($scope, $routeParams, Newsletters) {
    $scope.post = $routeParams.post;
    $scope.newsletters = Newsletters.query();
  });
