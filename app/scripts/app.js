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
                controller: 'VoteController',
                resolve: {
                    songs: function(dataContext) {
                        return dataContext.getSongs();
                    },
                    metadata: function(dataContext) {
                        return dataContext.getMetadata();
                    },
                    votes: function(dataContext) {
                        return dataContext.getVotes();
                    }
                }
            })
            .state('results', {
                url: '/results',
                templateUrl: 'views/results.html',
                controller: 'ResultsController'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: 'views/admin.html',
                controller: 'AdminController'
            });
    });
})();
