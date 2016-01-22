'use strict';

angular.module('bojApp')
  .controller('PageCtrl', function($scope, $location) { 

    var homeViews = ['/'];

    $scope.isActive = function(viewLocation) { 
      if (homeViews.indexOf(viewLocation) < 0) {
        return $location.path().lastIndexOf(viewLocation, 0) === 0;
      }
      return homeViews.indexOf($location.path()) >= 0;
    };

    var disabledViews = [];
//    var disabledViews = ['/courses', '/jobs', '/training'];

    $scope.isEnabled = function(viewLocation) { 
        return disabledViews.indexOf(viewLocation) < 0;
    };

    $scope.collapseNavbar = function() {
      angular.element('#js-navbar-collapse').collapse('hide');
    };
  });
