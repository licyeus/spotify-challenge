(function () {
    'use strict';

    angular.module('voteApp', [
        'ui.router',
        'ngAnimate',
        'ngSanitize',
        'ngTouch'
    ]);

    angular.module('voteApp').config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/vote');

        $stateProvider
            .state('vote', {
                url: '/vote',
                templateUrl: 'views/vote.html',
                controller: 'VoteController as vote'
            });
    });
})();
