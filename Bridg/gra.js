
angular

var cardApp = angular.module('cardApp', []);


 cardApp.service('MyService', function(){

// var card = [1,2,3,4,5,6,7,8,9,10,
//   11,12,13,14,15,16,17,18,19,20,
//   21,22,23,24,25,26,27,28,29,30,
//   31,32,33,34,35,36];

var card = [

  {"name":"6♦","rang":6, "mast":"buba"},
  {"name":"7♦","rang":7, "mast":"buba"},
  {"name":"8♦","rang":8, "mast":"buba"},
  {"name":"9♦","rang":9, "mast":"buba"},
  {"name":"10♦","rang":10, "mast":"buba","score":10},
  {"name":"B♦","rang":11, "mast":"buba","score":20},
  {"name":"D♦","rang":12, "mast":"buba","score":10},
  {"name":"K♦","rang":13, "mast":"buba","score":10},
  {"name":"T♦","rang":14, "mast":"buba","score":15},
  {"name":"6♥","rang":6, "mast":"czerwa"},
  {"name":"7♥","rang":7, "mast":"czerwa"},
  {"name":"8♥","rang":8, "mast":"czerwa"},
  {"name":"9♥","rang":9, "mast":"czerwa"},
  {"name":"10♥","rang":10, "mast":"czerwa","score":10},
  {"name":"B♥","rang":11, "mast":"czerwa","score":20},
  {"name":"D♥","rang":12, "mast":"czerwa","score":10},
  {"name":"K♥","rang":13, "mast":"czerwa","score":50},
  {"name":"T♥","rang":14, "mast":"czerwa","score":15},
  {"name":"6♠","rang":6, "mast":"pika"},
  {"name":"7♠","rang":7, "mast":"pika"},
  {"name":"8♠","rang":8, "mast":"pika"},
  {"name":"9♠","rang":9, "mast":"pika"},
  {"name":"10♠","rang":10, "mast":"pika","score":10},
  {"name":"B♠","rang":11, "mast":"pika","score":20},
  {"name":"D♠","rang":12, "mast":"pika","score":10},
  {"name":"K♠","rang":13, "mast":"pika","score":10},
  {"name":"T♠","rang":14, "mast":"pika","score":15},
  {"name":"6♣","rang":6, "mast":"kresta"},
  {"name":"7♣","rang":7, "mast":"kresta"},
  {"name":"8♣","rang":8, "mast":"kresta"},
  {"name":"9♣","rang":9, "mast":"kresta"},
  {"name":"10♣","rang":10, "mast":"kresta","score":10},
  {"name":"B♣","rang":11, "mast":"kresta","score":20},
  {"name":"D♣","rang":12, "mast":"kresta","score":10},
  {"name":"K♣","rang":13, "mast":"kresta","score":10},
  {"name":"T♣","rang":14, "mast":"kresta","score":15},
];



  var count = Object.keys(card).length;
  console.log(count);





var service = {};

  service.changeCard = function () {
    var random;
    var random2;
    for(var i=0; i<350; i++)
    {
      random = Math.floor((Math.random() * 36));
      random2 = Math.floor((Math.random() * 36));
      var buf = card[random];
      card[random] = card[random2];
      card[random2] = buf;

    }
    console.log(JSON.stringify(card));
  }

	service.getcard = function() {
		return card;
	}
  var player1=[];
  var player2=[];
  service.getp1 =function () {

    for(var p1=0; p1<5; p1++)
    {
      player1.push(card.pop());
      player2.push(card.pop());

    }
    return player1;

    console.log(JSON.stringify(player1));
  }
  service.getp2 =function () {

    return player2;
    console.log(JSON.stringify(player2));
  }

  var play=[];
    service.play =function(c) {
    console.log(c);
    // play.push(player1);
    // return play;
    // console.log(play);
  }






        return service;

});

cardApp.controller('cardlist', function($scope, MyService, $timeout){

     MyService.changeCard();
     $scope.cards = MyService.getcard();
     $scope.player1 = MyService.getp1();
     $scope.player2 = MyService.getp2();
     $scope.play = MyService.play;

    //  var k = JSON.stringify($scope.cards);
    //  console.log(k[1]);





});
// get_random = function (cards) {
//   return cards.length();
// }
// var k = JSON.stringify(cards);
// document.getElementById('interface').innerHTML = k.split("");
