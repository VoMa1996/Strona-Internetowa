// (function(){
//   'use strict';
//
//   angular
//     .module('app', [])
//     .controller('MainController', MainController);
//
//
//   function MainController($interval, ) {
//
//       var vm = this;
//
//       vm.someRandomVar = 'Trlolololo';
//
//       vm.interval = $interval(function(){
//         vm.someRandomVar = Math.random();
//       }, 1000)
//
//
//   }
// })()
var app = angular.module('myList', []);
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [{todoText:'Clean House', done:false}];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
});
