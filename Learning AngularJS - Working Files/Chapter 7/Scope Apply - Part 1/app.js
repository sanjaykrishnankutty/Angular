angular.module("app", [])
  .config(function() {
    console.log('Config has been reached');
  })
  .controller('MainController', function ($scope, $timeout, $http) {
 
    var counter = 0;
 
    var makeRequest = function() {
      $http({
        url: "http://google.com",
        method: "GET"
      }).success(console.log("GET request success!"));
    };
 
    $scope.$watch(function () {
      counter += 1;
      console.log("Digest has been called",counter,"times");
    });
 
    $timeout(function() {
      makeRequest();
      console.log('End timeout!');
    }, 3000);
  });