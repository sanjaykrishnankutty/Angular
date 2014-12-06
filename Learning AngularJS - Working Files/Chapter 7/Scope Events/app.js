var app = angular.module('app', []);

app.controller('MainController', function($scope,$rootScope) {
  $rootScope.$on('myEvent',function(event,src) { console.log('Main sees myEvent from',src) })

  $scope.broadClick = function(origin) { $rootScope.$broadcast('myEvent',origin) }
  $scope.emitClick = function(origin) { $rootScope.$emit('myEvent',origin) }
})

app.controller('MiddleController', function($scope) {
  $scope.$on('myEvent',function(event,src) { console.log('Middle sees myEvent from',src) })

  $scope.broadClick = function(origin) { $scope.$broadcast('myEvent',origin) }
  $scope.emitClick = function(origin) { $scope.$emit('myEvent',origin) }
})

app.controller('BottomController', function($scope) {
  $scope.$on('myEvent',function(event,src) { console.log('Bottom sees myEvent from',src) })

  $scope.broadClick = function(origin) { $scope.$broadcast('myEvent',origin) }
  $scope.emitClick = function(origin) { $scope.$emit('myEvent',origin) }
})

