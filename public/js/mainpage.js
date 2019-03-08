app.controller('myCtrl', function ($scope, $http) {
    $http.get("/api/netflix")
        .then(function (response) {

            $scope.netflix = response.data;
            console.log(response.data);

        });
        $http.get("/api/prime")
        .then(function (response) {

            $scope.prime = response.data;
            console.log(response.data);

        });
        $http.get("/api/hotstar")
        .then(function (response) {

            $scope.hotstar = response.data;
            console.log(response.data);

        });



});
$('#controlR').click(function() {
    event.preventDefault();
    $('#content').animate({
      marginLeft: "-=400px"
    }, "fast");
 });

$('#controlL').click(function() {
    event.preventDefault();
    $('#content').animate({
      marginLeft: "+=400px"
    }, "fast");
});