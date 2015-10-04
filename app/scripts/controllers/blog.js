'use strict';

angular.module('bojApp')
  .controller('BlogCtrl', function ($scope, $location, Utils) {
    
    $scope.utils = Utils;

    var allPosts = [
      { 
        id: '0003.third',
        title: 'Third post, very opinionated',
        author: 'Federico Peralta Schaffner',
        authorUrl: '/about',
        date: new Date('2015 October 4')
      },
      { 
        id: '0002.second',
        title: 'Second post',
        author: 'Federico Peralta Schaffner',
        authorUrl: '/about',
        date: new Date('2015 October 3')
      },
      { 
        id: '0001.welcome',
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

    $scope.visibleCommentsPostId = '';

    $scope.showCommentsWidget = function (postId) {
      $scope.visibleCommentsPostId = postId;
    };

    $scope.hideCommentsWidget = function () {
      $scope.visibleCommentsPostId = '';
    };

    $scope.postUrl = function (postId) {
      return $location.absUrl() + '/' + postId;
    };  

  });
