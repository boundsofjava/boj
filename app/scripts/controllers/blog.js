'use strict';

angular.module('bojApp')
  .controller('BlogCtrl', function ($scope, Utils) {
    $scope.utils = Utils;

    var allPosts = [
      { 
        name: '0001.welcome',
        title: 'The journey starts here',
        author: 'Federico Peralta Schaffner',
        authorUrl: '/about',
        date: new Date('2015 October 2')
      }
    ];

    $scope.posts = [allPosts[0]];

    $scope.loadPost = function () {
      var loadedCount = $scope.posts.length;
      if (loadedCount < allPosts.length) {
        var postToLoad = allPosts[loadedCount];
        $scope.posts.push(postToLoad);
      }
    };
  });
