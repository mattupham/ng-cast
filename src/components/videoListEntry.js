angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    currentVideo: '<',
    handleClick: '<'
  },
  
  controller: function() {
  },
  
  
  templateUrl: 'src/templates/videoListEntry.html'
});
