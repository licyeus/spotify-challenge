(function() {
    'use strict';

    angular.module('voteApp').controller('VoteController', VoteController);

    function VoteController($scope, dataContext) {
        $scope.metadata = dataContext.getMetadata();
        $scope.songs = dataContext.getSongs();
        $scope.votes = dataContext.getVotes();

        $scope.email = 'andrew@inkblot.io';
        $scope.first = "190jyVPHYjAqEaOGmMzdyk";
        $scope.second = "6bDRVbdZEyBnmOX0Yjh5rf";
        $scope.third = "0Wl5nDLyOLyYL0vCXjhtt7";

        $scope.submitVote = function() {
            var vote = {
                email: $scope.email,
                first: $scope.first,
                second: $scope.second,
                third: $scope.third
            };
            dataContext.saveVote(vote);
        };

        $scope.getSongName = function(song) {
            return song.artist + ' - ' + song.name;
        }
    }
})();

