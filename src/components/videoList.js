angular.module('video-player')
.component('videoList', {
  controller: function() {
    //console.log(this);
  },
  
  bindings: {
    video: '<',
    videos: '<',
  },
  
  templateUrl: 'src/templates/videoList.html'
});
