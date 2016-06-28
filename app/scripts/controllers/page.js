'use strict';

angular.module('bojApp')
  .controller('PageCtrl', function ($scope, $location, $window, $anchorScroll) { 

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

    $scope.autoCloseAlertsTimeoutHandle = undefined;
    $scope.autoCloseAlerts = function (timeout, callback, args) {
      if (typeof $scope.autoCloseAlertsTimeoutHandle !== 'undefined') {
        $window.clearTimeout($scope.autoCloseAlertsTimeoutHandle);
      }
      $scope.autoCloseAlertsTimeoutHandle = $window.setTimeout(function () {
        if (angular.element('.alert').length) {
          angular.element('.alert').alert('close');
        }
        $scope.autoCloseAlertsTimeoutHandle = undefined;
        if (typeof callback === 'function') {
          $window.setTimeout(function () {
            $scope.$apply(function () {
              callback(args);
            });
          }, 500);
        }
      }, timeout);
    };

    $scope.scrollTop = function () {
      $window.setTimeout(function () {
        $anchorScroll('top');
      }, 0);
    };

  });
