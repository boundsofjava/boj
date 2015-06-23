'use strict';

angular.module('bojApp')
  .controller('HeaderCtrl', function($scope, $location) { 

    $scope.isActive = function(viewLocation) { 
      if (viewLocation !== '/') {
        return $location.path().startsWith(viewLocation);
      }
      return $location.path() === '/';
    };

    var disabledViews = ['/courses'];
    $scope.isEnabled = function(viewLocation) { 
        return disabledViews.indexOf(viewLocation) < 0;
    };
  });
