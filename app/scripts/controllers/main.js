'use strict';

angular.module('bojApp')
  .controller('MainCtrl', function ($scope, Slider, Newsletters, Blog) {

    $scope.slider = Slider;
    $scope.mostRecentNewsletter = Newsletters.mostRecent();
    $scope.mostRecentBlog = Blog.mostRecent();

    $scope.setCurrentSlideIndex = function (index) {
      $scope.slider.direction = (index > $scope.slider.currentIndex) ? 'left' : 'right';
      $scope.slider.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function (index) {
      return $scope.slider.currentIndex === index;
    };

    $scope.prevSlide = function () {
      $scope.slider.direction = 'right';
      $scope.slider.currentIndex = ($scope.slider.currentIndex > 0) ? --$scope.slider.currentIndex : $scope.slider.slides.length - 1;
    };

    $scope.nextSlide = function () {
      $scope.slider.direction = 'left';
      $scope.slider.currentIndex = ($scope.slider.currentIndex < $scope.slider.slides.length - 1) ? ++$scope.slider.currentIndex : 0;
    };

    $scope.$watch('slider.currentIndex', function(newValue) {
      Slider.storeIndex(newValue);
    }, true);
  });
