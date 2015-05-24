'use strict';

angular.module('bojApp')
  .controller('NewsletterCtrl', function ($scope) {
    $scope.dummy = function() { 
      $scope.dummyStr = 'dummy';
    };
  });
