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
            newsletters.forEach(function (newsletter) {
              newsletter.prettyDate = Utils.formatDate(new Date(newsletter.date));
            });
            return newsletters;
          }
        }
      });
  });
