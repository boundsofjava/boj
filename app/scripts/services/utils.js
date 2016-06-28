'use strict';

angular.module('bojApp')
  .factory('Utils', function () {
    var formatDate = function (date) {
      var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];
      return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    };
    return {
      formatDate: formatDate,
      prettifyDate: function (obj) {
        var d = new Date(obj.date);
        obj.prettyDate = formatDate(d);
        return obj;
      }
    };
  });
