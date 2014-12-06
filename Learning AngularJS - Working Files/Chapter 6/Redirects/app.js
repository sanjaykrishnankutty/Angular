var app = angular.module('app', ['ngRoute']);

app.controller('MainController', function($scope,$routeParams) {
  $scope.somedata = $routeParams.myparam
});

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {templateUrl: 'view.html'})
    .when('/test', {redirectTo: function(routeParams,path,search) {
      console.log(routeParams,path,search)
      return '/test/'+search.mynewparam
    }})
    .when('/test/:myparam', {templateUrl: 'view2.html'})
    .otherwise({template: 'Couldn\'t match a route'})
})