'use strict';

angular.module('bojApp')
  .controller('NewsletterCtrl', function ($scope, $routeParams) {
    $scope.post = $routeParams.post;
    $scope.newsletters = [
      { 
        title: 'First Newsletter', 
        post: 1,
        summary: 'This is newsletter #1. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      },
      { 
        title: 'Second Newsletter', 
        post: 2,
        summary: 'This is newsletter #2. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      },
      { 
        title: 'Third Newsletter', 
        post: 3,
        summary: 'This is newsletter #3. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      },
      { 
        title: 'Fourth Newsletter', 
        post: 4,
        summary: 'This is newsletter #4. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      }
    ];
  });
