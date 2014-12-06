/// <reference path="angular.min.js" />

var app=angular.module('app', []);
app.controller('mainController', function ($scope)
{
    $scope.myer = [1, 2, 3, 4, 5]
    $scope.users = [{ "Name": "sanjay", "Age": 30 }, { "Name": "Twinkle", "Age": 30 }, { "Name": "Jeen", "Age": 31 }];
   // $scope.value = 1
   // $scope.even = false;
   // $scope.inc = function () {
   //     $scope.value += 1
   //     $scope.even = $scope.value % 2 == 0
   // }


  //  $scope.IsEven = function () {
    //    return $scope.value % 2 == 0
    //}
}
)

//angular.module('contollers',[]).controller('mainControllers',function($scope)
//{
  //  $scope.value = "ijklmnop";
//}
//)

//var app = angular.module('app', ['controllers']);
//angular.module('controllers', []).controller('mainController', function ($scope) {
//    $scope.value = "7890";
//}
//)
//var mainController = function ($scope) {
//  $scope.value = "test123";
//$scope.func = function () {
//  return "abcde";
//}
//}

//app.controller('mainController', function ($scope)
//{
//  $scope.val = "123";
//})
