angular.module('video-player')
.component('videoList', {
  // TODO
  
  bindings: {
    data: '<',
    currentVideo: '<'
  },
  
  templateUrl: 'src/templates/videoList.html'
});
