'use strict';

angular.module('bojApp')
  .controller('JobsCtrl', function ($scope) {
    $scope.dummy = function() { 
      $scope.dummyStr = 'dummy';
    };
  });
