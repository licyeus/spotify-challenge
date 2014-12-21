(function() {
    'use strict';

    angular.module('voteApp').controller('VoteController', VoteController);

    function VoteController($scope, $state, metadata, songs, votes, dataContext) {
        $scope.metadata = metadata;
        $scope.songs = songs;
        $scope.votes = votes;

        $scope.vote = {
            email: 'andrew@inkblot.io',
            first: '190jyVPHYjAqEaOGmMzdyk',
            second:  '6bDRVbdZEyBnmOX0Yjh5rf',
            third: '0Wl5nDLyOLyYL0vCXjhtt7'
        };

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

