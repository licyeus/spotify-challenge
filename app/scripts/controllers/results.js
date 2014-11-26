(function() {
  'use strict';

  angular.module('voteApp').controller('ResultsController', ResultsController);

  function ResultsController($firebase) {
    var vm = this;
    var ref = new Firebase('https://vivid-torch-4819.firebaseio.com/data');

    activate();

    function activate() {
        vm.data = $firebase(ref).$asObject();
        vm.data.$loaded().then(function() {
            vm.data.songs = vm.data.songs || [];
            vm.data.votes = vm.data.votes || [];

            populateVotes();
        });
    }

    function populateVotes() {
        var groupedVotes = _.groupBy(vm.data.votes, function(vote) { return vote.email; });
        var finalVotes = _.map(groupedVotes, function(votesForEmail) { return _.sortBy(votesForEmail, 'timestamp').reverse()[0]; });
        vm.voteMap = _.map(finalVotes, function(vote) { return { first: vote.first, second: vote.second, third: vote.third }; });
    }

    vm.scoreForSong = function(song) {
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
    };

    function generateGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }

    return vm;
  }
})();

