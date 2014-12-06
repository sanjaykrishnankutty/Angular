var app = angular.module('app', []);

app.controller('MainController', function($scope,twitterAPI,valService) {
  // console.log(constService,valService())
  twitterAPI.url = "newurl"
  console.log(twitterAPI)
})

app.constant('twitterAPI', {url: "api.twitter.com/v1/"})

app.value('valService', function() {return "this is returned from a fn"})