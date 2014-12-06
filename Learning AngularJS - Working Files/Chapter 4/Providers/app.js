var app = angular.module('app', []);

app.controller('MainController', function($scope,myFactory,myTest) {
  console.log(myFactory.getData())
  myFactory.addData('bla bla bla')
  console.log(myFactory.getData())

  console.log(myTest.getData())
  myTest.addData('bla bla bla')
  console.log(myTest.getData())
})

app.factory('myFactory',function() {
  var myString = "this is some other data"
  var addToString = function(newstr) {
    myString += newstr
  }
  return {
    getData: function() {
      return "String contains: " + myString
    },
    addData: addToString
  }
})

app.provider('myTest', function() {
  var myString = "this is some other data"
  var addToString = function(newstr) {
    myString += newstr
  }
  return {
    setData: function(data) {
      myString = data
    },
    $get: function() {
      return {
        getData: function() {
          return "String contains: " + myString
        },
        addData: addToString
      }
    }
  }
})

app.config(function(myTestProvider) {
  myTestProvider.setData('some different string')
})
