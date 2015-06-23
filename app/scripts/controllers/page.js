'use strict';

angular.module('bojApp')
  .controller('PageCtrl', function($scope) { 

    $scope.collapseNavbar = function() {
      angular.element('#js-navbar-collapse').collapse('hide');
    };
  });
