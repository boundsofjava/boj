'use strict';

angular.module('bojApp')
  .controller('NewsletterCtrl', function ($scope, Newsletters) {

    $scope.newsletters = Newsletters.query();
  
  })
  .controller('SelectedNewsletterCtrl', function ($scope, $routeParams, $location, Newsletters) {
    
    $scope.post = $routeParams.post;

    $scope.path = '/views/newsletter/' + $scope.post;
    
    Newsletters.query(null, function (values) {
      var found = false;
      for (var i = 0, len = values.length; i < len; i++) {
        if (values[i].post === $scope.post) {
          found = true;
          $scope.newsletter = values[i];
          var previous = i - 1;
          if (previous < 0) {
            previous = len - 1;
          }
          $scope.previousNewsletter = values[previous];
          var next = i + 1;
          if (next >= len) {
            next = 0;
          }
          $scope.nextNewsletter = values[next];
          return;
        }
      }
      if (!found) {
        $location.path('/newsletter/not-found');
      }
    });

    $scope.previous = function() {
      $location.path('/newsletter/' + $scope.previousNewsletter.post);
    };
  
    $scope.index = function() {
      $location.path('/newsletter');
    };

    $scope.next = function() {
      $location.path('/newsletter/' + $scope.nextNewsletter.post);
    };

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
