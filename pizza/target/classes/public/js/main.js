let app = angular.module("pizza", []);

app.controller("AppCtrl", function($scope, $http) {
    $scope.titles = [];

    $http.get("http://localhost:8088/api/pizzas").success(function (data) {
        $scope.titles = data;
    })
});