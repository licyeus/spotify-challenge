(function() {
    'use strict';

    angular.module('voteApp').controller('VoteController', VoteController);

    function VoteController($firebase, dataService) {
        var vm = this;
        var ref = new Firebase('https://vivid-torch-4819.firebaseio.com/data');

        activate();

        function activate() {
            vm.data = $firebase(ref).$asObject();
            vm.data.$loaded().then(function() {
                vm.data.songs = vm.data.songs || [];
                vm.data.votes = vm.data.votes || [];
            });
        }

        vm.submitVote = function() {
            var vote = {
                id: dataService.generateGuid(),
                email: vm.email,
                first: vm.first,
                second: vm.second,
                third: vm.third,
                timestamp: Firebase.ServerValue.TIMESTAMP
            };
            vm.data.votes.push(vote);
            vm.data.$save();
        };

        return vm;
    }
})();

