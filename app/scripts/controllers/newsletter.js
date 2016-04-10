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
  .controller('NewsletterSubscriptionCtrl', function($scope, Countries) {
    
    $scope.countries = Countries.query();
    
    $scope.selectCountry = function(country) {
      if (typeof country !== 'undefined') {
        $scope.mailchimp.COUNTRY = country.originalObject.name;
      }
    };
    
    $scope.showSubscriptionErrorAlert = false;

    var resetMailchimpModel = function (mailchimp) {
      delete mailchimp.result;
      delete mailchimp.errorMessage;
      delete mailchimp.successMessage;
    };

    $scope.onCloseErrorAlert = function (mailchimp) {
      $scope.showSubscriptionErrorAlert = false;
      resetMailchimpModel(mailchimp);
    };
    
    $scope.subscribe = function(mailchimp) {
      $scope.$on('mailchimp-response', function (event, result) {
        $scope.scrollTop();
        if (result === 'error') {
          $scope.showSubscriptionErrorAlert = true;
          $scope.autoCloseAlerts(12000, $scope.onCloseErrorAlert, mailchimp);
        }
      });
      resetMailchimpModel(mailchimp);
      $scope.addSubscription(mailchimp);
    };
  
  });
