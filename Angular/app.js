angular

  .module('app', [])
  .controller('todoController',['$scope', function($scope){
  $scope.todos = [
    {'title':' Build a todo app','done':false}
  ];

  $scope.addTodo = function(){
    $scope.listLength++;
    $scope.todos.push({'space':" ", 'title':$scope.newtodo, 'done':false})
    $scope.newtodo = ''
    return $scope.todoss = [
      {'space':'You have ', 'num':k+1, 'title' : ' list'}
    ]


  }
  $scope.clearCompleted = function(){
    $scope.todos = $scope.todos.filter(function(item){
      return !item.done

      $scope.toggleMarkAll = true;
    })
  }

  $scope.clear = function(){
    $scope.todos = $scope.todos.filter(function(item){

    })
  }

  $scope.toggleMarkAll = function() {
        angular.forEach($scope.todos, function(todo) {
          todo.done =$scope.markAll;

        });
    };

    $scope.deleteItem = function($index){
      $scope.todos.splice($index, 1)

    }


}])

$( document ).ready(function(){
//   Hide the border by commenting out the variable below
    var $on = 'section';
    $($on).css({
      'background':'none',
      'border':'none',
      'box-shadow':'none'
    });
}); 

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
