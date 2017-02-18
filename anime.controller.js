var app = angular.module("AnimeApp", []);
app.controller("FullmetalController", fullmetalCntrl);

function fullmetalCntrl($http, animeImdbSvc) {

    var self = this;
    this.animeList = [];

    animeImdbSvc.imdbIds.forEach(function(imdbId) {
        console.log(imdbId);
        $http.get("http://www.omdbapi.com/?i="+imdbId).then(function(response) {
            self.animeList.push(response.data);
            console.log(self.animeList);
        });
    }, this);

    
    
}