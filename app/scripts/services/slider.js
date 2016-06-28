'use strict';

angular.module('bojApp')
  .factory('Slider', function (localStorageService) {
    var slides = [
      { 
        title: 'Software Architecture', 
        image: 'images/slider/architecture.jpg', 
        quote: 'Architecture is the fundamental organization of a system embodied in its components, their relationships to each other and to the environment, and the principles guiding its design and evolution.',
        author: 'IEEE 1471'
      },
      { 
        title: 'Object-oriented Design', 
        image: 'images/slider/design.jpg', 
        quote: 'Analysis and design have been summarized in the phrase "do the right thing (analysis), and do the thing right (design)". (...) During object-oriented design, there is an emphasis on defining software objects and how they collaborate to fulfill the requirements.',
        author: 'Craig Larman'
      },
      { 
        title: 'Functional Programming', 
        image: 'images/slider/functional_programming.jpg', 
        quote: 'Functional programming is a programming paradigm (...) that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data. It is a declarative programming paradigm, which means programming is done with expressions.',
        author: 'Wikipedia'
      },
      { 
        title: 'Innovation', 
        image: 'images/slider/innovation.jpg', 
        quote: 'Without tradition, art is a flock of sheep without a shepherd. Without innovation, it is a corpse.',
        author: 'Winston Churchill'
      },
      { 
        title: 'The Internet', 
        image: 'images/slider/internet.jpg', 
        quote: 'An internet (spelled with a lower case i) is a network that is composed of a number of smaller computer networks. The Internet (spelled with an upper case I) is an internet that is vastly larger than any other internet and can be considered to be the ultimate internet.',
        author: 'The Linux Information Project'
      },
      { 
        title: 'Software Patterns', 
        image: 'images/slider/patterns.jpg', 
        quote: 'A pattern is primarily a way to chunk up advice about a topic. Chunking is important because there\'s such a huge amount of knowledge you need to write software. As a result there needs be ways to divide knowledge up so you don\'t need to remember it all - what you need is to be able to get at a particular chunk of knowledge when you need it. Only then do you need details.',
        author: 'Martin Fowler'
      }, 
      { 
        title: 'The Bounds of Java Newsletter', 
        image: 'images/slider/newsletter.jpg', 
        quote: 'A newsletter in which Java\'s edge concepts and advanced tricks are introduced and explored in depth. Software architecture and patterns, object-oriented design principles and functional programming techniques are covered and analyzed in a way that (I hope) is both innovative and enjoyable.',
        author: 'Federico Peralta Schaffner'
      }
    ];
    return {
      storeIndex: function (index) {
        localStorageService.set('Slider.currentIndex', index);
      },
      slides: slides,
      direction: 'left',
      currentIndex: localStorageService.get('Slider.currentIndex') || Math.floor(Math.random() * slides.length)
    };
  });
