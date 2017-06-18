(function () {
    var app = angular.module("SnippetFolder");

    app.service("DataService", function ($http) {

        return {
            getJsonData : function () {
                return $http.get("http://localhost:5000/snippets");
            }
        }
    });
}
)();