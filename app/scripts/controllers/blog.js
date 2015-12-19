'use strict';

angular.module('bojApp')
  .controller('BlogCtrl', function ($scope, $location, Blog) {
    
    var allPosts = Blog.query(null, function (value) {
      var firstPost = value[0];
      $scope.posts = [firstPost];
    });

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

    $scope.canDisplayComments = function (postId) {
      console.log(postId);
      return true;
    };
  });
