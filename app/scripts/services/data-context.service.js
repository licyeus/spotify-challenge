(function() {
    'use strict';

    angular.module('voteApp').factory('dataContext', dataContext);

    angular.module('voteApp').constant('FIREBASE_URI', 'https://vivid-torch-4819.firebaseio.com');

    function dataContext($q, FIREBASE_URI, $firebase) {
        var songsRef = new Firebase(FIREBASE_URI + '/songs');
        var songs = $firebase(songsRef).$asArray();

        var metadataRef = new Firebase(FIREBASE_URI + '/metadata');
        var metadata = $firebase(metadataRef).$asObject();

        var votesRef = new Firebase(FIREBASE_URI + '/votes');
        var votes = $firebase(votesRef).$asArray();

        var service = {
            getSongs: getSongs,
            getVotes: getVotes,
            saveVote: saveVote,
            getMetadata: getMetadata
        };
        return service;

        function getSongs() {
            var deferred = $q.defer();
            deferred.resolve(songs);
            return deferred.promise;
        }

        function getMetadata() {
            var deferred = $q.defer();
            deferred.resolve(metadata);
            return deferred.promise;
        }

        function getVotes() {
            var deferred = $q.defer();
            deferred.resolve(votes);
            return deferred.promise;
        }

        function saveVote(vote) {
            vote.timestamp = Firebase.ServerValue.TIMESTAMP;
            votes.$add(vote);
        }
    }
})();
