angular
  .module("app")
  .controller("myController", ['$scope', function($scope) {
    var technologies = [
      {model: "BMW e46", likes: 0, dislikes: 0 },
      {model: "BMW e60", likes: 0, dislikes: 0 },
      {model: "BMW e65", likes: 0, dislikes: 0 },
      {model: "BMW e39", likes: 0, dislikes: 0 },
    ];
    $scope.technologies = technologies;

    $scope.incrementLikes = function(technology){
      technology.likes++;
    }
    $scope.incrementDisLikes = function(technology){
      technology.dislikes++;
    }
  }]);
