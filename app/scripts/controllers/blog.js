'use strict';

angular.module('bojApp')
  .controller('BlogCtrl', function ($scope) {

    var allPosts = [
      { 
        post: '12',
        date: new Date(2015, 4, 5)
      },
      { 
        post: '11',
        date: new Date(2015, 3, 30)
      },
      { 
        post: '10',
        date: new Date(2015, 3, 25)
      },
      { 
        post: '9',
        date: new Date(2015, 3, 20)
      },
      { 
        post: '8',
        date: new Date(2015, 3, 15)
      },
      { 
        post: '7',
        date: new Date(2015, 3, 5)
      },
      { 
        post: '6',
        date: new Date(2015, 2, 25)
      },
      { 
        post: '5',
        date: new Date(2015, 2, 15)
      },
      { 
        post: '4',
        date: new Date(2015, 2, 5)
      },
      { 
        post: '3',
        date: new Date(2015, 1, 25)
      },
      { 
        post: '2',
        date: new Date(2015, 1, 15)
      },
      { 
        post: '1',
        date: new Date(2015, 1, 5)
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
