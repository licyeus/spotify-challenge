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
        $urlRouterProvider.otherwise('/arrayhealth/vote');

        $stateProvider
            .state('contest', {
                url: '/:contestName',
                abstract: true,
                templateUrl: 'views/contest.html',
                controller: 'ContestController',
                resolve: {
                    contest: function($stateParams, dataContext) {
                        return dataContext.getContest($stateParams.contestName);
                    }
                }
            })
            .state('main', {
                abstract: true,
                parent: 'contest',
                template: '<ui-view></ui-view>',
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
            .state('vote', {
                url: '/vote',
                parent: 'main',
                templateUrl: 'views/vote.html',
                controller: 'VoteController'
            })
            .state('results', {
                url: '/results',
                params: { voteEmail: null },
                parent: 'main',
                templateUrl: 'views/results.html',
                controller: 'ResultsController'
            })
            .state('admin', {
                url: '/admin',
                parent: 'main',
                templateUrl: 'views/admin.html',
                controller: 'AdminController'
            });
    });
})();
