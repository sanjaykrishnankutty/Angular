var app = angular.module('app', []);

app.controller('MainController', function($scope) {

})

app.directive('foo', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: '<div>This is the template content!</div><div ng-transclude></div>'
  }
})
