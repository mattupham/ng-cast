angular.module('video-player')
.component('videoList', {
  controller: function() {
  },
  
  bindings: {
    currentVideo: '<',
    videos: '<',
    handleClick: '<'
  },
  
  templateUrl: 'src/templates/videoList.html'
});
