(function() {
    'use strict';

    angular.module('voteApp').controller('VoteController', VoteController);

    function VoteController($scope, metadata, songs, votes, dataContext) {
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
            dataContext.saveVote(vote);
        };

        $scope.getSongName = function(song) {
            return song.artist + ' - ' + song.name;
        };
    }
})();

