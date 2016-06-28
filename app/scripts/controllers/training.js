'use strict';

angular.module('bojApp')
  .controller('TrainingsCtrl', function ($scope) {
    $scope.dummy = function() { 
      $scope.dummyStr = 'dummy';
    };
  });
