angular.module('video-player')

.component('app', {
  
  controller: function() {
    this.random = 'asdf';
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];
    console.log('video 0', this.videos[0]);
    
    this.handleClick = function(currentVideo) {
      this.currentVideo = currentVideo;
      console.log('this.random', this.random);
    }.bind(this);
  },
  
  templateUrl: 'src/templates/app.html'
});


