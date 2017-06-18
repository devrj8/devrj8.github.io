(function () {
    var app = angular.module("SnippetFolder");

    app.service("DataService", function ($http) {

        return {
            getJsonData : function () {
                return $http.get("https://code-snippets-block.herokuapp.com/snippets");
            }
        }
    });
}
)();