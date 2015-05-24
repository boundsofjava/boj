'use strict';

angular.module('bojApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.dummy = function() { 
      $scope.dummyStr = 'dummy';
    };
  });
