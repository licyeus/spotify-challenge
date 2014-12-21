(function() {
    'use strict';

    angular.module('voteApp').controller('ResultsController', ResultsController);

    function ResultsController($scope, $state, votes, metadata, songs, dataContext) {
        $scope.songs = songs;
        $scope.voteEmail = $state.params.voteEmail;

        populateVotes();

        function populateVotes() {
            var groupedVotes = _.groupBy(votes, function(vote) { return vote.email; });
            var finalVotes = _.map(groupedVotes, function(votesForEmail) { return _.sortBy(votesForEmail, 'timestamp').reverse()[0]; });
            _.each($scope.songs, function(song) {
                song.score = scoreForSong(song, finalVotes);
            });
        }

        function scoreForSong(song, finalVotes) {
            var tally = 0;
            _.each(finalVotes, function(vote) {
                if(song.id == vote.first) {
                    tally += 3;
                } else if(song.id == vote.second) {
                    tally += 2;
                } else if(song.id == vote.third) {
                    tally += 1;
                }
            });
            return tally;
        };

        $scope.getSongName = function(song) {
            return song.artist + ' - ' + song.name;
        };
    }
})();

