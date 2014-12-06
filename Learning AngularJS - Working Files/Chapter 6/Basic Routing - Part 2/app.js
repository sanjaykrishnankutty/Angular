var app = angular.module('app', ['ngRoute']);

app.controller('MainController', function($scope,$routeParams) {

  console.log($routeParams)
  $scope.somedata = $routeParams.myparam
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {templateUrl: 'view.html'})
    .when('/test/:myparam/:myparam2/:myparam3', {templateUrl: 'view2.html'})
    .otherwise({template: 'Couldn\'t match a route'})
})