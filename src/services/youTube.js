angular.module('video-player')
.service('youTube', function($http, $window) {
  this.search = function(query, callback) {
    // console.log('searched');
    console.log(callback);
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        maxResults: 5,
        key: window.YOUTUBE_API_KEY,
        videoEmbeddable: 'true'
      }
    })
    .then(function({data}) {
      console.log('data before', data);
      if (callback) {
        callback(data.items);
        console.log('data after', data);
      }
    })
    .catch(function({data}) {
      console.log('nice try');
    });
  };
});
