angular.module('video-player')

.component('search', {
  
  bindings: {
    searchResults: '<',
    search: '<'
  },
  
  controller: function() { 
    console.log('results', this.searchResults);
    console.log('inside search', this.search);
    this.searchClick = function() {
      //grab input value
      // console.log('input value', this.input);
      this.search.search(this.input, function(data) {
        this.searchResults(data);
      });
      //fire off get request
    };
  },

  templateUrl: 'src/templates/search.html'
});
