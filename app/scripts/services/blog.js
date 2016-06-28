'use strict';

angular.module('bojApp')
  .factory('Blog', function ($resource, Utils) {
    return $resource('/data/blog.json',
      null,
      {
        query: {
          isArray: true,
          transformResponse: function (data) {
            var posts = JSON.parse(data);
            posts.forEach(Utils.prettifyDate);
            return posts;
          }
        },
        mostRecent: {
          method: 'GET',
          transformResponse: function (data) {
            var posts = JSON.parse(data);
            if (posts.length === 0) {
              return {
                noEntries: true
              };
            }
            var newest = posts.reduce(function (a, b) {
              return a.date > b.date ? a : b;
            });
            return Utils.prettifyDate(newest);
          }
        }
      });
  });
