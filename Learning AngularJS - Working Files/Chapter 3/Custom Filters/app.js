var app = angular.module('app', []);

app.controller('MainController', function($scope,$filter) {
  $scope.mydata = {arr: [{name:"joe",age:23},{name:"jane",age:34},{name:"john",age:12},{name:"jake",age:56}]}
})

app.filter('charlimit', function() {
  return function(input,length) {
    if (!length) {
      length = 10
    }
    if (!input) {
      return ''
    }
    if (input.length <= length) {
      return input
    }
    else {
      return input.substring(0,length) + '...'
    }
  }
})

app.filter('candrink', function() {
  return function(data,minage) {
    var filtered = [];
    if (!minage) {
      minage = 21
    }
    for (var i=0;i<data.length;i++) {
      var value = data[i];
      if (value.age >= minage) {
        filtered.push(value);
      }
    }
    return filtered;
  }
})