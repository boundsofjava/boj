'use strict';

angular.module('bojApp')
  .controller('NewsletterCtrl', function ($scope, $routeParams, Utils) {
    $scope.utils = Utils;
    $scope.post = $routeParams.post;
    $scope.newsletters = [
      { 
        title: 'First Newsletter', 
        post: '1',
        date: new Date('2015 January 2'),
        summary: 'This is newsletter #1. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      },
      { 
        title: 'Second Newsletter, which has a very long title, to see how it fits into the container', 
        post: '2',
        date: new Date('2015 January 15'),
        summary: 'This is newsletter #2. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      },
      { 
        title: 'Third Newsletter', 
        post: '3',
        date: new Date('2015 January 28'),
        summary: 'This is newsletter #3. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      },
      { 
        title: 'Fourth Newsletter', 
        post: '4',
        date: new Date('2015 February 3'),
        summary: 'This is newsletter #4. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      }
    ];
  });
