(function() {
  'use strict';

  angular.module('voteApp').controller('VoteController', VoteController);

  function VoteController($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
})();