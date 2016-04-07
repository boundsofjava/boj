'use strict';

angular.module('bojApp')
  .controller('NewsletterCtrl', function ($scope, Newsletters) {
    $scope.newsletters = Newsletters.query();
  })
  .controller('SelectedNewsletterCtrl', function ($scope, $routeParams, Newsletters) {
    $scope.post = $routeParams.post;
    Newsletters.query(null, function (values) {
        for (var i = 0, len = values.length; i < len; i++) {
            if (values[i].post === $scope.post) {
                $scope.newsletter = values[i];
                return;
            }
        }
    });
  })
  .controller('NewsletterSubscriptionCtrl', function($scope, $anchorScroll, Countries) {
    $scope.countries = Countries.query();
    $scope.selectCountry = function(country) {
      if (typeof country !== 'undefined') {
        $scope.mailchimp.COUNTRY = country.originalObject.name;
      }
    };
    $scope.subscribe = function(mailchimp) {
      $scope.addSubscription(mailchimp);
      $anchorScroll('top');
      $scope.autoCloseAlerts(5000);
    };
  });
