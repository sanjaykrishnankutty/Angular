var app = angular.module('app', []);

app.controller('MainController', function($scope,$http) {
  $scope.getFromAPI = function() {
    $http.get('https://api.github.com/users/angular')
      .success(function(data, status, headers, config){
        // success
        console.log('success',status)
        console.log(data)
      })
      .error(function(data, status, headers, config){
        // error
        console.log('error!',status)
        console.log(data)
      })
  }
});

app.config(function($httpProvider) {
  console.log($httpProvider.defaults.headers.post)
})