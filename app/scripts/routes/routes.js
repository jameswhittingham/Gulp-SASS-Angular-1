angular.module('myApp.routes', ['ngRoute'])

.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "templates/index.html"
    })
    .when("/style-guide", {
        templateUrl : "templates/style-guide.html"
    });
});