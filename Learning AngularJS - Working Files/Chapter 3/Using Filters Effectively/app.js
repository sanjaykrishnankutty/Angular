var app = angular.module('app', []);

app.controller('MainController', function($scope,$filter) {
  $scope.mydata = {arr: [{name:"joe",age:23},{name:"jane",age:34},{name:"john",age:12},{name:"jake",age:56}]}

  console.log($filter('uppercase')('make this string uppercase!'))
})
