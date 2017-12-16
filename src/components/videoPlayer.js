angular.module('video-player')

.component('videoPlayer', {
  controller: function() {
  },

  bindings: {
    currentVideo: '<'
  },
  
  templateUrl: 'src/templates/videoPlayer.html'
});
