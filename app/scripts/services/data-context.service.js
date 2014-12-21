(function() {
    'use strict';

    angular.module('voteApp').factory('dataContext', dataContext);

    angular.module('voteApp').constant('FIREBASE_URI', 'https://vivid-torch-4819.firebaseio.com');

    function dataContext($q, FIREBASE_URI, $firebase) {
        var ref = new Firebase(FIREBASE_URI + '/spotify').child('arrayhealth').child('contests').child('0');

        var songs = $firebase(ref.child('songs').orderByChild('artist')).$asArray();
        var metadata = $firebase(ref.child('metadata')).$asObject();
        var votes = $firebase(ref.child('votes')).$asArray();

        var service = {
            getSongs: getSongs,
            getVotes: getVotes,
            saveVote: saveVote,
            getMetadata: getMetadata
        };
        return service;

        function getSongs() {
            var deferred = $q.defer();
            songs.$loaded(function() {
                deferred.resolve(songs);
            });
            return deferred.promise;
        }

        function getMetadata() {
            var deferred = $q.defer();
            metadata.$loaded(function() {
                deferred.resolve(metadata);
            });
            deferred.resolve(metadata);
            return deferred.promise;
        }

        function getVotes() {
            var deferred = $q.defer();
            votes.$loaded(function() {
                deferred.resolve(votes);
            });
            return deferred.promise;
        }

        function saveVote(vote) {
            vote.timestamp = Firebase.ServerValue.TIMESTAMP;
            return votes.$add(vote);
        }
    }
})();
