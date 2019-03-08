app.controller('searchController', function ($scope,$sce, $routeParams, $http) {
    $http.get("/api/search/"+ $routeParams.id + "")
        .then(function (response) {

            $scope.searchResult = response.data;
            console.log(response.data);

        });


});