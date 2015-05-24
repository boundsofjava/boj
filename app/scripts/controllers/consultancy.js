'use strict';

angular.module('bojApp')
  .controller('ConsultancyCtrl', function ($scope) {
    $scope.dummy = function() { 
      $scope.dummyStr = 'dummy';
    };
  });
