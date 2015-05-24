'use strict';

angular.module('bojApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.dummy = function() { 
      $scope.dummyStr = 'dummy';
    };
  });
