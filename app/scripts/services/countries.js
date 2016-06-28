'use strict';

angular.module('bojApp')
  .factory('Countries', function ($resource) {
    return $resource('/data/countries.json',
      null,
      {
        query: {
          isArray: true,
          transformResponse: function (data) {
            return JSON.parse(data);
          }
        }
      });
  });
