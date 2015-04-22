'use strict';

angular.module('bojApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.fps_image = "fps.jpg";
    $scope.fps_image_hover_in = function() {
    	$scope.fps_image = "fps-hover.jpg";
    };
    $scope.fps_image_hover_out = function() {
    	$scope.fps_image = "fps.jpg";
    };
  });
