'use strict';

angular.module('bojApp')
  .controller('NewsletterCtrl', function ($scope, $routeParams) {
    $scope.post = $routeParams.post;
    $scope.newsletters = [
      { 
        title: 'First Newsletter', 
        post: '1',
        date: new Date(2015, 0, 5),
        summary: 'This is newsletter #1. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      },
      { 
        title: 'Second Newsletter', 
        post: '2',
        date: new Date(2015, 0, 15),
        summary: 'This is newsletter #2. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      },
      { 
        title: 'Third Newsletter', 
        post: '3',
        date: new Date(2015, 0, 25),
        summary: 'This is newsletter #3. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      },
      { 
        title: 'Fourth Newsletter', 
        post: '4',
        date: new Date(2015, 1, 5),
        summary: 'This is newsletter #4. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      },
      { 
        title: 'Fifth Newsletter', 
        post: '5',
        date: new Date(2015, 1, 15),
        summary: 'This is newsletter #5. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      },
      { 
        title: 'Sixth Newsletter', 
        post: '6',
        date: new Date(2015, 1, 25),
        summary: 'This is newsletter #6. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      },
      { 
        title: 'Seventh Newsletter', 
        post: '7',
        date: new Date(2015, 2, 5),
        summary: 'This is newsletter #7. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      },
      { 
        title: 'Eighth Newsletter', 
        post: '8',
        date: new Date(2015, 2, 15),
        summary: 'This is newsletter #8. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      },
      { 
        title: 'Ninth Newsletter', 
        post: '9',
        date: new Date(2015, 2, 15),
        summary: 'This is newsletter #9. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      },
      { 
        title: 'Ninth Newsletter (Follow-up), very very very long title, to show how elements fit into each list group item', 
        post: '9b',
        date: new Date(2015, 2, 17),
        summary: 'This is newsletter #9b (follow-up). It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      },
      { 
        title: 'Tenth Newsletter', 
        post: '10',
        date: new Date(2015, 3, 2),
        summary: 'This is newsletter #10. It treats about this and about that. It discusses a lot of stuff and presents a very nice topic, while introducing a few examples that illustrate the topic being discussed.' 
      }
    ];
  });
