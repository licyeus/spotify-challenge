(function() {
    'use strict';

    angular.module('voteApp').controller('VoteController', VoteController);

    function VoteController($scope, $state, metadata, songs, votes, dataContext) {
        $scope.metadata = metadata;
        $scope.songs = songs;
        $scope.votes = votes;

        $scope.submitVote = function() {
            var vote = $scope.vote;
            dataContext.saveVote(vote).then(function() {
                $state.go('results', { voteEmail: vote.email });
            });
        };

        $scope.getSongName = function(song) {
            return song.artist + ' - ' + song.name;
        };
    }
})();

