var app = angular.module('app', ['ngRoute']);

var mainCtrl = app.controller('MainController', function($scope) {
  $scope.somedata = "This is some data!"
});

mainCtrl.data2 = function($q,$timeout) {
            var defer = $q.defer();
            $timeout(function() {
              defer.resolve();
              console.log('also finished')
            }, 1000);
            return defer.promise;
          }

app.config(function($routeProvider) {
  $routeProvider
    .when('/', 
      {
        templateUrl: 'view.html',
        resolve: {
          data1: function($q,$timeout) {
            var defer = $q.defer();
            $timeout(function() {
              defer.resolve();
              console.log('finished')
            }, 2000);
            return defer.promise;
          },
          data2: mainCtrl.data2
        }
      })
    .otherwise({template: 'Couldn\'t match a route'})
})