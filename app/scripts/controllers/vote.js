(function() {
  'use strict';

  angular.module('voteApp').controller('VoteController', VoteController);

  function VoteController() {
    var vm = this;

    vm.submitVote = function() {
        console.log('saving vote');
    };

    return vm;
  }
})();

