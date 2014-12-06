var app = angular.module('app', ['ngRoute']);

app.controller('MainController', function($scope) {
  $scope.somedata = "This is some data!"
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {templateUrl: 'view.html'})
})