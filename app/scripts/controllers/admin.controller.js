(function() {
    'use strict';

    angular.module('voteApp').controller('AdminController', AdminController);

    function AdminController($scope, metadata, votes, songs) {
        $scope.votes = votes;

        $scope.importSongs = function() {
            // TODO
            alert('sorry!');
        };

        $scope.songWithId = function(id) {
            var song = _.find(songs, function(song) { return song.id == id; });
            return getSongName(song);
        };

        function getSongName(song) {
            return song.artist + ' - ' + song.name;
        };
    }
})();

