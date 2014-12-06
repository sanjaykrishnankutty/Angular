var app = angular.module('app', ['app.angularGit']);

app.controller('MainController', function($scope,AngularGit) {

  var params = {category: 'commits'}//, sha: '80e7a4558490f7ffd33d142844b9153a5ed00e86'}

  // console.log(AngularGit.get(params))
  console.log(AngularGit.query(params))
});

angular.module('app.angularGit', ['ngResource'])
  .factory('AngularGit',function($resource) {
    return $resource('https://api.github.com/repos/angular/angular.js/:category/:sha')
  })
