'use strict';

angular.module('bojApp')
  .controller('CoursesCtrl', function ($scope) {
    $scope.dummy = function() { 
      $scope.dummyStr = 'dummy';
    };
  });
