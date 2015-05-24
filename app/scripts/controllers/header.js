'use strict';

angular.module('bojApp')
  .controller('HeaderCtrl', function($scope, $location) { 
    $scope.isActive = function(viewLocation) { 
        return viewLocation === $location.path();
    };
    $scope.isEnabled = function(viewLocation) { 
        return viewLocation !== '/courses';
    };
  });
