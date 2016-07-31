'use strict';

angular.module('bojApp')
  .controller('BlogCtrl', function ($scope, $location, $timeout, Blog) {
    
    var allPosts = Blog.query(null, function (value) {
      if (typeof value === 'undefined' || value.length === 0) {
        $scope.noEntries = true;
      } else {
        $scope.noEntries = false;
        var firstPost = value[0];
        $scope.posts = [firstPost];
        $timeout(function () {
          DISQUSWIDGETS.getCount({reset: true}); // jshint ignore:line
        });
      }
    });

    $scope.loadPost = function () {
      if (typeof $scope.posts === 'undefined' || $scope.posts.length === 0) {
        return;
      }
      var loadedCount = $scope.posts.length;
      if (loadedCount < allPosts.length) {
        var postToLoad = allPosts[loadedCount];
        $scope.posts.push(postToLoad);
        $timeout(function () {
          DISQUSWIDGETS.getCount({reset: true}); // jshint ignore:line
        });
      }
    };

    $scope.visibleCommentsPostId = '';

    $scope.showCommentsWidget = function (postId) {
      $scope.visibleCommentsPostId = postId;
    };

    $scope.hideCommentsWidget = function () {
      $scope.visibleCommentsPostId = '';
      $timeout(function () {
        DISQUSWIDGETS.getCount({reset: true}); // jshint ignore:line
      });
    };

    $scope.postUrl = function (postId) {
      return $location.absUrl() + '/' + postId;
    };  
  });
