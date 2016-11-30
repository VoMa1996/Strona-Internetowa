angular

var wheelApp = angular.module('wheelApp', []);

wheelApp.controller('wheelList', function($scope){
  $scope.title = '';
  $scope.wheels = [
    {'name': 'BBS',
     'rozmiar': '15,16,17,18,19,20',
     'material': 'Aluminij',
     'picture' : "m3_small/bbs.jpg",
     'status': true,
     'cena': '1999 pln'
     },
     {'name': 'Ride',
      'rozmiar': '16,17,18,19,20,21',
      'material': 'Aluminij',
      'picture' : "m3_small/bbs1.jpg",
      'status': false,
      'cena': '2100 pln'},
      {'name': 'Sport+',
       'rozmiar': '15,16,17,18,19,20',
       'material': 'Aluminij',
       'picture' : "m3_small/oz.jpg",
       'status': true,
       'cena': '2050 pln'},
       {'name': 'JapanWheels',
        'rozmiar': '16,17,18,19,20,21',
        'material': 'Aluminij',
        'picture' : "m3_small/oz1.jpg",
        'status': false,
        'cena': '2299 pln'},
        {'name': 'Korp',
         'rozmiar': '15,16,17,18,19,20',
         'material': 'Stal',
         'picture' : "m3_small/borbet.jpg",
         'status': true,
         'cena': '2850 pln'},
         {'name': 'BMW Original',
          'rozmiar': '16,17,18,19,20,21',
          'material': 'Aluminij',
          'picture' : "m3_small/bobet1.jpg",
          'status': false,
          'cena': '2999 pln'},
          {'name': 'Borbet',
           'rozmiar': '15,16,17,18,19,20',
           'material': 'Aluminij',
           'picture' : "m3_small/japan.jpg",
           'status': false,
           'cena': '1760 pln'},
  ];
  $scope.addTrue =function (wheelItem) {
    return wheelItem.name && wheelItem.rozmiar && wheelItem.status === true;
  }
});
