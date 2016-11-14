var k = 0;

angular

  .module('app', [])
  .controller('todoController',['$scope', function($scope){
  $scope.todos = [
    {'title':' Build a todo app','done':false}
  ];

  $scope.addTodo = function(){
    k++;
    $scope.todos.push({'space':" ", 'title':$scope.newtodo, 'done':false})
    $scope.newtodo = ''
    return $scope.todoss = [
      {'space':'You have ', 'num':k+1, 'title' : ' list'}
    ]


  }
  $scope.clearCompleted = function(){
      k=-1;
    $scope.todos = $scope.todos.filter(function(item){

      if(!item.done){
        k++;
      }
      return !item.done

      $scope.toggleMarkAll = true;
    })
  }

  $scope.clear = function(){
      k=-1;
    $scope.todos = $scope.todos.filter(function(item){





    })
  }

  $scope.toggleMarkAll = function() {
        angular.forEach($scope.todos, function(todo) {
          todo.done =$scope.markAll;

        });
    };


    // $('#startEngine').attr("src", "Photos/start.mp3");
    //     $('#startEngine').attr("autostart", "true");
    //     $('#startEngine').attr("loop", "true");
    //     $('#startEngine').attr("width", "2");
    //     $('#startEngine').attr("height", "0");



  $scope.info = function(){
    return $scope.todoss = [
      {'space':'You have ', 'num':k+1, 'title' : ' lists'}
    ]

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
