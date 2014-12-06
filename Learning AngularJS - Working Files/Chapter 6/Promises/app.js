var app = angular.module('app', []);

app.controller('MainController', function($scope,$q,$timeout) {

  $scope.mydata = "Old data"

  var defer = $q.defer();

  defer.promise
    .then(function(val) {
      $scope.mydata += val
      return val
    })
    .then(function(val) {
      $scope.mydata += val
      return val
    })
    .then(function(val) {
      $scope.mydata += val
      return val
    })

  $timeout(function() {
    defer.resolve("More Cowbell ");
  },3000)
});
