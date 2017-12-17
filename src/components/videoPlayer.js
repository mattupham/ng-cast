angular.module('video-player')

.component('videoPlayer', {
  controller: function() {
    //]console.log('this', this);
  },

  bindings: {
    currentVideo: '<'
  },
  
  templateUrl: 'src/templates/videoPlayer.html'
});
