angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    videos: '<'
  },
  
  controller: function() {
    //console.log(this);
    //this.videos = exampleVideoData;
    //this.currentVideo = this.videos[0];
    //console.log('item', item);
  },
  
  
  templateUrl: 'src/templates/videoListEntry.html'
});
