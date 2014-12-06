///<reference path="angular.js" />

var app=angular.module('app', []);
//angular.module('controllers',[]).controller('mainController',function($scope)
//{$scope.val="abc"}
//)

//var mainController = function ($scope) {
//    $scope.val = "test123";
//    $scope.func = function () {
//       return 123;
//    }
//}


app.controller('mainController', function ($scope, $sceDelegateProvider)
{
    $scope.trustSrc = function (url) {
        return $sce.trustAsResourceUrl(url);
    }
    $sceDelegateProvider.resourceUrlWhitelist(['^(?:http(?:s)?:\/\/)?(?:[^\.]+\.)?\(vimeo|youtube)\.com(/.*)?$', 'self']);
    $scope.photo = {
        url: "http://www.mapsofindia.com/images2/india-map.jpg",
        date:"hello there"
    }
  
    
    //$scope.val = 1;
    //$scope.myarr = [1, 2, 3, 4, 5, 6]
    //$scope.users = [{ name: "sanjay", age: 30 }, { name: "twinkle", age: 30 }]
    //$scope.inc = function ()
    //{
    //    $scope.val +=1;
    //}

    //$scope.IsEven = function ()
    //{
     //   return $scope.val%2==0
    //}

    //$scope.mydata = { val: "Jake" }
    //$scope.$watch('mydata.val',function(newval)
    //{
      //  $scope.mydata.toolong=newval.length>15
    //})

    //$scope.data = 0
    //$scope.datas = []
    //$scope.increment = function () {
     //   $scope.data ++
    //}

    //$scope.break=$scope.$watch('data',function()
    //{
    //    $scope.datas.push($scope.data)
    //}
    //)

   // $scope.mydata = { arr: [{ name: "sanjay", age: 30 }, { name: "Twinkle", age: 30 }, {name:"Jeen",age:30}]}
}
)
app.directive('photo', function () {
    return {
        restrict: 'E',
        template: '<figure>' +
                   '<img width="500px"  ng-src="{{photoSrc}}" />' +
                   '<figcaption>{{caption}}</figcaption>' +
                   '</figure>',
        replace: true,
        scope: {

            photoSrc: '@',
            caption: '@'
        }

    }
}
)
//app.constant("twitterAPI", { url: "http://google.com" })
//app.value("valueService", function () { return "http://google.com" })


app.factory('myFactory',function(){
    var myString = "this is some data"
    var addToString = function (newStr) {
        myString+=newStr
    }
    return{
        getData:function(){
            return "string contains: "+ myString
        },
        addData:addToString
    }
}
)

app.service('myService', function () {
    var myString = "this is some data"
    var addToString = function (newStr) {
        myString += newStr
    }

        this.getData=function () {
            return "string contains: " + myString
        }
        this.addData=addToString

}
)

app.factory('myDecoratorFactory', function () {
    var myString = "this is some string"
    var addToString = function (newdata){ 
        myString+=newdata
    }

    return {
        getData: function () { return myString },
        setData: function (data) { myString = data },
        addData:addToString
    }
})

app.config(function($provide){
    $provide.decorator('myDecoratorFactory',function($delegate){
        $delegate.reverse = function ()
        {
            $delegate.setData($delegate.getData().split('').reverse().join(''))
        }
    }
    )
})

app.filter('charLimit',function()
{
    return function (input, length) {
        if (!length) {
            length=10
        }
        if (!input)
        {
            return ''
        }
        if (input.length < length) {
            return input
        }
        else {
            return input.substring(0,length)+'....'
        }
    }
}
)
app.filter('minAge',function()
{
    return function(data,age)
    {
        var filtered=[]
        if (!data) {
            return ''
        }

        if (!age) {
            age=21
        }

        for (var i = 0; i < data.length; i++)
        {
            var value = data[i]
            if (value.age >= age) {
                filtered.push(data[i])
            }
        }

        return filtered
    }
}
)



