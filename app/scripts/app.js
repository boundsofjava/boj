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
    'infinite-scroll'
  ])
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('boj');
    localStorageServiceProvider.setStorageCookieDomain(document.domain);
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/newsletter', {
        templateUrl: 'views/newsletter.html',
        controller: 'NewsletterCtrl'
      })
      .when('/newsletter/:post', {
        templateUrl: 'views/newsletter/post.html',
        controller: 'NewsletterCtrl'
      })
      .when('/courses', {
        templateUrl: 'views/courses.html',
        controller: 'CoursesCtrl'
      })
      .when('/consultancy', {
        templateUrl: 'views/consultancy.html',
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
      .when('/privacy', {
        templateUrl: 'views/privacy.html',
        controller: 'PrivacyCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
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
  });
