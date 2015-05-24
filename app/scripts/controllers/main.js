'use strict';

angular.module('bojApp')
  .controller('MainCtrl', function ($scope) {
    $scope.dummy = function() { 
      $scope.dummyStr = 'dummy';
    };
  });
