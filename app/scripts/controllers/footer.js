'use strict';

angular.module('bojApp')
  .controller('FooterCtrl', function ($scope) { 
    $scope.currentYear = new Date().getFullYear();
  });
