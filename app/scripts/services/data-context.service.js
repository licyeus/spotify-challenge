(function() {
    'use strict';

    angular.module('voteApp').factory('dataContext', dataContext);

    angular.module('voteApp').constant('FIREBASE_URI', 'https://vivid-torch-4819.firebaseio.com');

    function dataContext($q, FIREBASE_URI, $firebase) {
        var contest, songs, metadata, votes;

        var service = {
            getContest: getContest,
            getSongs: getSongs,
            getVotes: getVotes,
            saveVote: saveVote,
            getMetadata: getMetadata
        };
        return service;

        function getContest(contestName) {
            var contestRef = new Firebase(FIREBASE_URI + '/spotify').child(contestName);
            var ref = contestRef.child('contests').child('0');

            contest = $firebase(contestRef.child('metadata')).$asObject();
            songs = $firebase(ref.child('songs').orderByChild('artist')).$asArray();
            metadata = $firebase(ref.child('metadata')).$asObject();
            votes = $firebase(ref.child('votes')).$asArray();

            var deferred = $q.defer();
            contest.$loaded(function() {
                deferred.resolve(contest);
            });
            return deferred.promise;
        }

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
