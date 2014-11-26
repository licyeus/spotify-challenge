(function() {
  'use strict';

  angular.module('voteApp').controller('AdminController', AdminController);

  function AdminController($firebase) {
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

    // TODO: create song import process

    vm.addSong = function(song) {
        song.id = generateGuid();
        song.timestamp = Firebase.ServerValue.TIMESTAMP;
        vm.data.songs.push(song);
        vm.data.$save();
    };

    vm.songWithId = function(id) {
        var song = _.find(vm.data.songs, function(song) { return song.id == id; });
        return song.artist + ' - "' + song.title + '"';
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

