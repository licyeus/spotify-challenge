(function() {
    'use strict';

    angular.module('voteApp').controller('ContestController', ContestController);

    function ContestController($scope, contest) {
        $scope.contest = contest;
    }
})();
