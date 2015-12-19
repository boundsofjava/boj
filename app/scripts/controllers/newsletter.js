'use strict';

angular.module('bojApp')
  .controller('NewsletterCtrl', function ($scope, Newsletters) {
    $scope.newsletters = Newsletters.query();
  })
  .controller('SelectedNewsletterCtrl', function ($scope, $routeParams, Newsletters) {
    $scope.post = $routeParams.post;
    Newsletters.query(null, function (values) {
        for (var i = 0, len = values.length; i < len; i++) {
            if (values[i].post === $scope.post) {
                $scope.newsletter = values[i];
                return;
            }
        }
    });
  });
