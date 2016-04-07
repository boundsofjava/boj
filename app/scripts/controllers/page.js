'use strict';

angular.module('bojApp')
  .controller('PageCtrl', function ($scope, $location, $window) { 

    var homeViews = ['/'];

    $scope.isActive = function (viewLocation) { 
      if (homeViews.indexOf(viewLocation) < 0) {
        return $location.path().lastIndexOf(viewLocation, 0) === 0;
      }
      return homeViews.indexOf($location.path()) >= 0;
    };

    $scope.collapseNavbar = function () {
      angular.element('#js-navbar-collapse').collapse('hide');
    };

    $scope.autoCloseAlerts = function (timeout) {
      $window.setTimeout(function () {
        angular.element('.alert').alert('close');
      }, timeout);
    };
  });
