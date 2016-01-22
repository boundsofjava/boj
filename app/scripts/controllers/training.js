'use strict';

angular.module('bojApp')
  .controller('TrainingCtrl', function ($scope) {
    $scope.dummy = function() { 
      $scope.dummyStr = 'dummy';
    };
  });
