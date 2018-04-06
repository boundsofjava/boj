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
    'angucomplete-alt',
    'hljs'
  ])
  .config(function (localStorageServiceProvider, hljsServiceProvider) {
    localStorageServiceProvider.setPrefix('boj');
    localStorageServiceProvider.setStorageCookieDomain(document.domain);
    hljsServiceProvider.setOptions({
      tabReplace: '    '
    });
  })
  .config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'http://boundsofjava.us11.list-manage.com/subscribe/post-json**',
      'https://boundsofjava.us11.list-manage.com/subscribe/post-json**',
      '//boundsofjava.us11.list-manage.com/subscribe/post-json**'
    ]);
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
      .when('/newsletter/not-found', {
        templateUrl: 'views/newsletter/not-found.html',
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
        controller: 'TrainingsCtrl'
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
  .directive('back', function($window) {
    return {
      restrict: 'A',
      link: function (scope, elem) {
        elem.bind('click', function () {
          $window.history.back();
        });
      }
    };
  })
  .directive('changeClassOnScroll', function($window) {
    return {
      restrict: 'A',
      scope: {
          offset: '@',
          scrollClass: '@'
      },
      link: function(scope, element) {
          angular.element($window).bind('scroll', function() {
              if (this.pageYOffset >= parseInt(scope.offset)) {
                  element.addClass(scope.scrollClass);
              } else {
                  element.removeClass(scope.scrollClass);
              }
          });
      }
    };
  })
  .run(function ($anchorScroll) {
    $anchorScroll.yOffset = 100;
  });
