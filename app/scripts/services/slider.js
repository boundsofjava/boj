'use strict';

angular.module('bojApp')
  .factory('Slider', function (localStorageService) {
    return {
      storeIndex: function (index) {
        localStorageService.set('Slider.currentIndex', index);
      },
      slides: [
        { image: 'images/slider/architecture.jpg', title: 'Software Architecture', description:'' },
        { image: 'images/slider/design.jpg', title: 'Object Oriented Design Principles', description:'' },
        { image: 'images/slider/functional_programming.jpg', title: 'Functional Programming', description:'' },
        { image: 'images/slider/innovation.jpg', title: 'Innovation', description:'' },
        { image: 'images/slider/internet.jpg', title: 'The Internet of Things', description:'' },
        { image: 'images/slider/newsletter.jpg', title: 'The Bounds of Java Newsletter', description:'' },
        { image: 'images/slider/patterns.jpg', title: 'Software Patterns', description:'' }
      ],
      direction: 'left',
      currentIndex: localStorageService.get('Slider.currentIndex') || 0
    };
  });
