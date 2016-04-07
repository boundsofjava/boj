'use strict';

angular
  .module('bojApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch', 
    'LocalStorageModule',
    'infinite-scroll',
    'angularUtils.directives.dirDisqus',
    'angular.vertilize',
    'mailchimp',
    'angucomplete-alt'
  ])
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('boj');
    localStorageServiceProvider.setStorageCookieDomain(document.domain);
  })
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/newsletter', {
        templateUrl: 'views/newsletter.html',
        controller: 'NewsletterCtrl'
      })
      .when('/newsletter/subscription', {
        templateUrl: 'views/newsletter/subscription.html',
        controller: 'NewsletterCtrl'
      })
      .when('/newsletter/:post', {
        templateUrl: 'views/newsletter/post.html',
        controller: 'NewsletterCtrl'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'ServicesCtrl'
      })
      .when('/services/courses', {
        templateUrl: 'views/services/courses.html',
        controller: 'CoursesCtrl'
      })
      .when('/services/training', {
        templateUrl: 'views/services/training.html',
        controller: 'TrainingCtrl'
      })
      .when('/services/jobs', {
        templateUrl: 'views/services/jobs.html',
        controller: 'JobsCtrl'
      })
      .when('/services/consultancy', {
        templateUrl: 'views/services/consultancy.html',
        controller: 'ConsultancyCtrl'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive('documentClick', function ($document, $parse) {
    var linkFunction = function ($scope, $element, $attributes) {
      var scopeExpression = $attributes.documentClick;
      var invoker = $parse(scopeExpression);
      $document.on('click', function (event) {
        $scope.$apply(function () {
          invoker($scope, { $event: event });
        });
      });
    };
    return linkFunction;
  })
  .directive('focus', function ($timeout) {
    return {
      scope: {
        trigger: '@focus'
      },
      link: function (scope, element) {
        scope.$watch('trigger', function (value) {
          if (value === 'true') {
            $timeout(function () {
              element[0].focus();
            });
          }
        });
      }
    };
  })
  .run(function ($anchorScroll) {
    $anchorScroll.yOffset = 106;
  });
