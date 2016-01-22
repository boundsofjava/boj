'use strict';

angular.module('bojApp')
  .controller('ServicesCtrl', function ($scope) {
    $scope.dummy = function() { 
      $scope.dummyStr = 'dummy';
    };
  });
