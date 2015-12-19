'use strict';

angular.module('bojApp')
  .controller('PageCtrl', function($scope, $location) { 

    var homeViews = ['/', '/privacy', '/contact'];

    $scope.isActive = function(viewLocation) { 
      if (homeViews.indexOf(viewLocation) < 0) {
        return $location.path().lastIndexOf(viewLocation, 0) === 0;
      }
      return homeViews.indexOf($location.path()) >= 0;
    };

    var disabledViews = ['/courses', '/jobs'];

    $scope.isEnabled = function(viewLocation) { 
        return disabledViews.indexOf(viewLocation) < 0;
    };

    $scope.collapseNavbar = function() {
      angular.element('#js-navbar-collapse').collapse('hide');
    };
  });

