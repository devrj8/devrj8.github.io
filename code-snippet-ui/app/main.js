var app = angular.module("SnippetFolder",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl : "snippet_list.html",
            controller : "SnippetListCntrl"
        })
        .when("/snippet/:name", {
            templateUrl : "snippet.html",
            controller : "SnippetCntrl"
        });
});