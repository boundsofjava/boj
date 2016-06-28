'use strict';

angular.module('bojApp')
  .factory('Newsletters', function ($resource, Utils) {
    return $resource('/data/newsletters.json',
      null,
      {
        query: {
          isArray: true,
          transformResponse: function (data) {
            var newsletters = JSON.parse(data);
            newsletters.forEach(Utils.prettifyDate);
            return newsletters;
          }
        },
        mostRecent: {
          method: 'GET',
          transformResponse: function (data) {
            var newsletters = JSON.parse(data);
            var newest = newsletters.reduce(function (a, b) {
              return a.date > b.date ? a : b;
            });
            Utils.prettifyDate(newest);
            return newest;
          }
        }
      });
  });
