'use strict';

angular.module('bojApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.dummy = function() { 
      $scope.dummyStr = 'dummy';
    };
  });
