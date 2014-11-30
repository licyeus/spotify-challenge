(function() {
    'use strict';

    angular.module('voteApp').factory('dataService', dataService);

    function dataService() {
        var service = {
            generateGuid: generateGuid
        };
        return service;

        function generateGuid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                return v.toString(16);
            });
        }
    }
})();
