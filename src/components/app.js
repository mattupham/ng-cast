angular.module('video-player')

.component('app', {
  
  controller: function() {
    this.data = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
  },
  // TODO
  
  
  templateUrl: 'src/templates/app.html'
});


