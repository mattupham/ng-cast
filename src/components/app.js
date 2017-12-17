angular.module('video-player')


  
  .controller('AppCtrl', function(youTube) {   

    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];
    this.searchService = youTube;
    console.log('search service', this.searchService);
    
    this.handleClick = function(currentVideo) {
      this.currentVideo = currentVideo;
  
    }.bind(this);
    
    this.searchResults = function(searchVideos) {
      this.videos = searchVideos;
      this.currentVideo = searchVideos[0];
    }.bind(this);
    
  })
  
  .component('app', {
    controller: 'AppCtrl',
    templateUrl: 'src/templates/app.html'
  });
  
  



