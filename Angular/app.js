
angular
  .module('app', [])
  .controller('todoController',['$scope', function($scope){
  $scope.todos = [
    {'title':'Build a todo app','done':false}
  ];
  $scope.addTodo = function(){
    $scope.todos.push({'title':$scope.newtodo, 'done':false})
    $scope.newtodo = ''
  }
  $scope.clearCompleted = function(){
    $scope.todos = $scope.todos.filter(function(item){
      return !item.done
    })
  }
}])


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
// var app = angular.module('myList', []);
// app.controller('todoCtrl', function($scope) {
//     $scope.todoList = [{todoText:'Clean House', done:false}];
//
//     $scope.todoAdd = function() {
//         $scope.todoList.push({todoText:$scope.todoInput, done:false});
//         $scope.todoInput = "";
//     };
//
//     $scope.remove = function() {
//         var oldList = $scope.todoList;
//         $scope.todoList = [];
//         angular.forEach(oldList, function(list) {
//             if (!list.done) $scope.todoList.push(list);
//         });
//     };
// });
