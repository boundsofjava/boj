'use strict';

angular.module('bojApp')
  .controller('NewsletterCtrl', function ($scope, $routeParams) {
    $scope.post = $routeParams.post;
    $scope.newsletters = [
      { 
        title: '001 - Newsletter 1', 
        post: '001',
        description: 'This is newsletter 001. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      },
      { 
        title: '002 - Newsletter 2', 
        post: '002',
        description: 'This is newsletter 002. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      },
      { 
        title: '003 - Newsletter 3', 
        post: '003',
        description: 'This is newsletter 003. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      },
      { 
        title: '004 - Newsletter 4', 
        post: '004',
        description: 'This is newsletter 004. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      }
    ];
  });
