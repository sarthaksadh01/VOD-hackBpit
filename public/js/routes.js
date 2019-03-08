app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "/pages/main.html"
        })
        .when("/title/:id", {

            templateUrl: "/pages/title.html",
            controller: "titleController"
        })
        .when("/search/:id", {

            templateUrl: "/pages/search.html",
            controller: "searchController"
        })
});