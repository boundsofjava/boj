'use strict';

angular.module('bojApp')
  .factory('Utils', function () {
    return {
      formatDate: function (date) {
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
        var s = months[date.getMonth()];
        s += ' ';
        s += date.getDate();
        s += ', ';
        s += date.getFullYear();
        return s;
      }
    };
  });
