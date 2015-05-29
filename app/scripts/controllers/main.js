'use strict';

angular.module('bojApp')
  .controller('MainCtrl', function ($scope) {
    $scope.slides = [
      { image: 'images/slider/architecture.jpg', description: 'Software Architecture' },
      { image: 'images/slider/design.jpg', description: 'Design Principles' },
      { image: 'images/slider/functional_programming.jpg', description: 'Functional Programming' },
      { image: 'images/slider/innovation.jpg', description: 'Innovation' },
      { image: 'images/slider/internet.jpg', description: 'Internet' },
      { image: 'images/slider/newsletter.jpg', description: 'The Bounds of Java Newsletter' },
      { image: 'images/slider/patterns.jpg', description: 'Software Architectural and Design Patterns' }
    ];

    $scope.direction = 'left';
    $scope.currentIndex = 0;

    $scope.setCurrentSlideIndex = function (index) {
      $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
      $scope.currentIndex = index;
    };

    $scope.isCurrentSlideIndex = function (index) {
      return $scope.currentIndex === index;
    };

    $scope.prevSlide = function () {
      $scope.direction = 'right';
      $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
    };

    $scope.nextSlide = function () {
      $scope.direction = 'left';
      $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
    };
})
.animation('.slide-animation', function () {
  return {
		beforeAddClass: function (element, className, done) {
			var scope = element.scope();
			if (className == 'ng-hide') {
				var finishPoint = element.parent().width();
				if (scope.direction !== 'right') {
					finishPoint = -finishPoint;
				}
				TweenMax.to(element, 0.5, { left: finishPoint, onComplete: done });
			} else {
				done();
			}
		},
		removeClass: function (element, className, done) {
			var scope = element.scope();
			if (className == 'ng-hide') {
				element.removeClass('ng-hide');
				var startPoint = element.parent().width();
				if (scope.direction === 'right') {
					startPoint = -startPoint;
				}
				TweenMax.fromTo(element, 0.5, { left: startPoint }, { left: 0, onComplete: done });
			} else {
				done();
			}
		}
	};
});
