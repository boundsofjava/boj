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
  // .animation('.slide-animation', function () {
  //   return {
  // 		enter: function (element, done) {
  // 			var scope = element.scope();
		// 		var finishPoint = element.parent().width();
		// 		if (scope.slider.direction !== 'right') {
		// 			finishPoint = -finishPoint;
		// 		}
		// 		TweenLite.to(element, 0.5, { left: finishPoint, onComplete: done });
  // 		},
  // 		leave: function (element, done) {
  // 			var scope = element.scope();
 	// 			// element.removeClass('ng-hide');
		// 		var startPoint = element.parent().width();
		// 		if (scope.slider.direction === 'right') {
		// 			startPoint = -startPoint;
		// 		}
		// 		TweenLite.fromTo(element, 0.5, { left: startPoint }, { left: 0, onComplete: done });
  // 		}
  // 	};
  // });
