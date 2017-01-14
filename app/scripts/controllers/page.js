'use strict';

angular.module('bojApp')
  .controller('PageCtrl', function ($scope, $location, $window) { 

    var homeViews = ['/'];

    $scope.isActive = function (viewLocation) { 
      var path = $location.path();
      if (homeViews.indexOf(viewLocation) < 0) {
        return path.lastIndexOf(viewLocation, 0) === 0;
      }
      return homeViews.indexOf(path) >= 0;
    };

    $scope.collapseNavbar = function (id) {
      angular.element(id).collapse('hide');
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

    $scope.backgroundClass = function() {
      var backgroundClass = 'background-';
      var path = $location.path();

      if (path.startsWith('/newsletter/subscription')) {
        backgroundClass = backgroundClass + 'newsletter-subscription';
      } else if (path.startsWith('/newsletter')) {
        backgroundClass = backgroundClass + 'newsletter';
      } else if (path.startsWith('/services/courses')) {
        backgroundClass = backgroundClass + 'courses';
      } else if (path.startsWith('/services/training')) {
        backgroundClass = backgroundClass + 'training';
      } else if (path.startsWith('/services/consultancy')) {
        backgroundClass = backgroundClass + 'consultancy';
      } else if (path.startsWith('/services/jobs')) {
        backgroundClass = backgroundClass + 'jobs';
      } else if (path.startsWith('/services')) {
        backgroundClass = backgroundClass + 'services';
      } else if (path.startsWith('/blog')) {
        backgroundClass = backgroundClass + 'blog';
      } else if (path.startsWith('/about')) {
        backgroundClass = backgroundClass + 'about';
      } else {
        backgroundClass = backgroundClass + 'home';
      }
      return backgroundClass;
    };

    $scope.currentYear = new Date().getFullYear();

  });
