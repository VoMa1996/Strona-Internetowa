angular

var wheelApp = angular.module('wheelApp', []);

wheelApp.controller('wheelList', function($scope){
  $scope.title = 'Wheels';
  $scope.wheels = [
    {'name': 'BBS',
     'rozmiar': '15,16,17,18,19',
     'status': true},
     {'name': 'Ride',
      'rozmiar': '16,17,18,19,20,21',
      'status': false},
      {'name': 'Sport+',
       'rozmiar': '15,16,17,18,19,20',
       'status': true},
       {'name': 'JapanWheels',
        'rozmiar': '16,17,18,19,20,21',
        'status': false},
        {'name': 'Korp',
         'rozmiar': '15,16,17,18,19,20',
         'status': true},
         {'name': 'BMW Original',
          'rozmiar': '16,17,18,19,20,21',
          'status': false},
          {'name': 'Borbet',
           'rozmiar': '15,16,17,18,19,20',
           'status': false},
  ];
  $scope.addTrue =function (wheelItem) {
    return wheelItem.name && wheelItem.rozmiar && wheelItem.status === true;
  }
});
