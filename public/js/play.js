app.controller('titleController', function ($scope,$sce, $routeParams, $http) {
    $http.get("/api/title/"+ $routeParams.id + "")
        .then(function (response) {
            console.log(response.data)

            var val = response.data.split('=');
            console.log(val);
            var abcd="https://www.youtube.com/embed/"+val[1];
            $scope.titleResult = $sce.trustAsResourceUrl(abcd);
            // $scope.titleResult = abcd;
            console.log(titleResult);

        });


});