var app = angular.module('app', ['ngRoute']);
 
app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {templateUrl: "oldview.html"})
    .when('/newroute',
    {
      templateUrl: "newview.html",
      controller: "NewController",
      resolve: {
        app: function ($q, $timeout) {
          var defer = $q.defer();
          $timeout(function () {
            defer.resolve(); 
          }, 2000);
          return defer.promise;
        }
      }
    })
  })
 
app.controller("MainController", function ($scope,$rootScope,$route,$location) {
  $scope.somedata = "This is some data!"

  $scope.navigate = function () {
    console.log($scope);
    $location.path("/newroute");
  }

  $rootScope.$on("$routeChangeStart", function (event, current, previous, rejection) {
    console.log("Route Change Start!")
    console.log(event, current, previous, rejection);
  });      
  $rootScope.$on("$routeChangeSuccess", function (event, current, previous, rejection) {
    console.log("Route Change Success!")
    console.log(event, current, previous, rejection);
  });
});
 
app.controller("OldController", function ($scope, $route, $location) {
});
 
app.controller("NewController", function($scope, $template) {
  console.log($scope, $template);
});
