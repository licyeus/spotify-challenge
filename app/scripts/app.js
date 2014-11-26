(function () {
    'use strict';

    angular.module('voteApp', [
        'ui.router',
        'ngAnimate',
        'ngSanitize',
        'ngTouch',
        'firebase'
    ]);

    angular.module('voteApp').config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/vote');

        $stateProvider
            .state('vote', {
                url: '/vote',
                templateUrl: 'views/vote.html',
                controller: 'VoteController as vote'
            })
            .state('results', {
                url: '/results',
                templateUrl: 'views/results.html',
                controller: 'ResultsController as results'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: 'views/admin.html',
                controller: 'AdminController as admin'
            });
    });
})();
