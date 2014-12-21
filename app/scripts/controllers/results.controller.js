(function() {
    'use strict';

    angular.module('voteApp').controller('ResultsController', ResultsController);

    function ResultsController($scope, dataContext) {
        function populateVotes() {
            /*
            var groupedVotes = _.groupBy(vm.data.votes, function(vote) { return vote.email; });
            var finalVotes = _.map(groupedVotes, function(votesForEmail) { return _.sortBy(votesForEmail, 'timestamp').reverse()[0]; });
            vm.voteMap = _.map(finalVotes, function(vote) { return { first: vote.first, second: vote.second, third: vote.third }; });
            */
        }

        $scope.scoreForSong = function(song) {
            return 0;
            /*
            var tally = 0;
            _.each(vm.voteMap, function(vote) {
                if(song.id == vote.first) {
                    tally += 3;
                } else if(song.id == vote.second) {
                    tally += 2;
                } else if(song.id == vote.third) {
                    tally += 1;
                }
            });
            return tally;
            */
        };
    }
})();

