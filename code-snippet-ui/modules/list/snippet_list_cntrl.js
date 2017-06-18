(function () {
    var app = angular.module("SnippetFolder");

    app.controller('SnippetListCntrl', function ($rootScope, DataService) {
        DataService.getJsonData().then(function (response) {
            $rootScope.list = response.data;
        });
    });

    app.controller('SnippetCntrl', function ($rootScope, $routeParams) {
        var snippets = $rootScope.list;

        

        for (index in snippets) {

            if (snippets[index].name == $routeParams.name) {
                $rootScope.snippet = snippets[index];
            }
        }

    });


})();