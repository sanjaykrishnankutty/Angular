var app = angular.module('app', []);

app.controller('MainController', function($scope,myFactory,Auth) {
  console.log(myFactory.getdata())
  console.log(myFactory.mydata)
})

app.factory('myFactory',function() {
  var mydata = "this is some other data"
  var myfunc = function() {}
  return {
    getdata: function() {
      return mydata
    }  
  }
})

app.factory('Auth',function() {
  var current_user = {}
  return {
    setUser: function() {},
    login: function() {}
    logout:
  }
})
