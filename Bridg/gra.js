
angular

var cardApp = angular.module('cardApp', []);

cardApp.service('MyDeck', function() {

    var card = [

        {
            "name": "6♦",
            "rang": 6,
            "mast": "buba"
        }, {
            "name": "7♦",
            "rang": 7,
            "mast": "buba"
        }, {
            "name": "8♦",
            "rang": 8,
            "mast": "buba"
        }, {
            "name": "9♦",
            "rang": 9,
            "mast": "buba"
        }, {
            "name": "10♦",
            "rang": 10,
            "mast": "buba",
            "score": 10
        }, {
            "name": "B♦",
            "rang": 11,
            "mast": "buba",
            "score": 20
        }, {
            "name": "D♦",
            "rang": 12,
            "mast": "buba",
            "score": 10
        }, {
            "name": "K♦",
            "rang": 13,
            "mast": "buba",
            "score": 10
        }, {
            "name": "T♦",
            "rang": 14,
            "mast": "buba",
            "score": 15
        }, {
            "name": "6♥",
            "rang": 6,
            "mast": "czerwa"
        }, {
            "name": "7♥",
            "rang": 7,
            "mast": "czerwa"
        }, {
            "name": "8♥",
            "rang": 8,
            "mast": "czerwa"
        }, {
            "name": "9♥",
            "rang": 9,
            "mast": "czerwa"
        }, {
            "name": "10♥",
            "rang": 10,
            "mast": "czerwa",
            "score": 10
        }, {
            "name": "B♥",
            "rang": 11,
            "mast": "czerwa",
            "score": 20
        }, {
            "name": "D♥",
            "rang": 12,
            "mast": "czerwa",
            "score": 10
        }, {
            "name": "K♥",
            "rang": 13,
            "mast": "czerwa",
            "score": 50
        }, {
            "name": "T♥",
            "rang": 14,
            "mast": "czerwa",
            "score": 15
        }, {
            "name": "6♠",
            "rang": 6,
            "mast": "pika"
        }, {
            "name": "7♠",
            "rang": 7,
            "mast": "pika"
        }, {
            "name": "8♠",
            "rang": 8,
            "mast": "pika"
        }, {
            "name": "9♠",
            "rang": 9,
            "mast": "pika"
        }, {
            "name": "10♠",
            "rang": 10,
            "mast": "pika",
            "score": 10
        }, {
            "name": "B♠",
            "rang": 11,
            "mast": "pika",
            "score": 20
        }, {
            "name": "D♠",
            "rang": 12,
            "mast": "pika",
            "score": 10
        }, {
            "name": "K♠",
            "rang": 13,
            "mast": "pika",
            "score": 10
        }, {
            "name": "T♠",
            "rang": 14,
            "mast": "pika",
            "score": 15
        }, {
            "name": "6♣",
            "rang": 6,
            "mast": "kresta"
        }, {
            "name": "7♣",
            "rang": 7,
            "mast": "kresta"
        }, {
            "name": "8♣",
            "rang": 8,
            "mast": "kresta"
        }, {
            "name": "9♣",
            "rang": 9,
            "mast": "kresta"
        }, {
            "name": "10♣",
            "rang": 10,
            "mast": "kresta",
            "score": 10
        }, {
            "name": "B♣",
            "rang": 11,
            "mast": "kresta",
            "score": 20
        }, {
            "name": "D♣",
            "rang": 12,
            "mast": "kresta",
            "score": 10
        }, {
            "name": "K♣",
            "rang": 13,
            "mast": "kresta",
            "score": 10
        }, {
            "name": "T♣",
            "rang": 14,
            "mast": "kresta",
            "score": 15
        },
    ];

    // var count = Object.keys(card).length;
    // console.log(count);

    var koloda = card;

    var service = {};

    service.changeCard = function() {
        var random;
        var random2;
        for (var i = 0; i < 36; i++) {
            random = Math.floor((Math.random() * 36));
            random2 = Math.floor((Math.random() * 36));
            var buf = koloda[random];
            koloda[random] = koloda[random2];
            koloda[random2] = buf;

        }
        console.log(JSON.stringify(koloda));
    }

    service.getcard = function() {
        return koloda;
    }
    var player1 = [];
    var player2 = [];


    // service.pullCard = function () {
    //   var oneCard = [];
    //   oneCard.push(koloda.pop());
    //   console.log(oneCard);
    //   return oneCard;
    //   oneCard=[];
    // }

    service.getp1 = function() {

        for (var p1 = 0; p1 < 5; p1++) {

            player1.push(koloda.pop());
            player2.push(koloda.pop());

        }
        return player1;

        console.log(JSON.stringify(player1));
    }
    service.getp2 = function() {

        return player2;
        console.log(JSON.stringify(player2));
    }



    service.getone = function () {

      player1.push(koloda.pop());
      return player1;

    }
    service.getone2 = function () {

      player2.push(koloda.pop());
      return player2;

    }

    return service;

});

cardApp.controller('cardlist', function($scope, MyDeck) {


var mas = [];


    MyDeck.changeCard();
    $scope.cards = MyDeck.getcard();
    $scope.player1 = MyDeck.getp1();
    $scope.player2 = MyDeck.getp2();
    mas.push($scope.player1.pop());
    $scope.playg = mas;



    var k=0;

    $scope.play = function(c, b) {

        if(k==1){



      if(mas[mas.length -1].mast == c.mast ||  mas[mas.length -1].rang == c.rang){
        mas.push(c);
        $scope.player1.splice(b, 1);

        $scope.playg = mas;
        if(mas[mas.length-1].rang == 8 )
        {
          $scope.player2 = MyDeck.getone2();
          $scope.player2 = MyDeck.getone2();
          k=1;
        }else if(mas[mas.length-1].rang == 14 || mas[mas.length-1].rang == 6 ){

          k=1;
        }else{
        k=0;
        }


      }else {
        mas = mas[mas.length-1];
        console.log("Try Again");
        // console.log(mas);

      }
    }else{
      console.log("Not you now!");
    }



    // var licz=0;
    //       for (var i = 0; i < $scope.player2.length-1; i++) {
    //      if($scope.player2[i].mast != mas[mas.length-1].mast && $scope.player2[i].rang != mas[mas.length-1].rang)
    //      {
    //        licz++;
    //        if(licz == $scope.player2.length)
    //        {
    //          $scope.player2 = MyDeck.getone2();
    //          if($scope.player2[$scope.player2.length-1].mast !=mas[mas.length-1].mast)
    //          {
    //
    //            k=1;
    //
    //           //  console.log(k);
    //          }
    //          licz=0;
    //        }
    //   // console.log("nooo");
    //
    //      }
    // }


      // $scope.player2 = $scope.player2.push(MyDeck.getone2());
      // liczcard=0;


        // console.log(mas[0].mast);

    }

    $scope.play2 = function(c, b) {

      if(k==0){


        if(mas[mas.length -1].mast == c.mast || mas[mas.length -1].rang == c.rang){
          mas.push(c);
          $scope.player2.splice(b, 1);

          $scope.playg = mas;
          if(mas[mas.length-1].rang == 8 )
          {
            $scope.player1 = MyDeck.getone();
            $scope.player1 = MyDeck.getone();
            k=0;
          }else if(mas[mas.length-1].rang == 14 || mas[mas.length-1].rang == 6){

            k=0;
          }else{
          k=1;
          }
        }else {
          console.log("Try Again");
        }


      }else{
        console.log("not you now!");
      }

// var licz=0;
//       for (var i = 0; i < $scope.player1.length-1; i++) {
//      if($scope.player1[i].mast != mas[mas.length-1].mast && $scope.player1[i].rang != mas[mas.length-1].rang)
//      {
//        licz++;
//        if(licz == $scope.player1.length)
//        {
//          $scope.player1 = MyDeck.getone();
//          if($scope.player1[$scope.player1.length-1].mast !=mas[mas.length-1].mast)
//          {
//            k=0;
//           //  console.log(k);
//          }
//          licz=0;
//        }
//   // console.log("nooo");
//
//      }else{
//
//       //  console.log("yeeees", licz);
//       //  console.log($scope.player1.length-1);
//      }
// }


    }

$scope.get = function () {
  $scope.player1 = MyDeck.getone();
  if(mas[mas.length-1].rang == $scope.player1[$scope.player1.length-1].rang || mas[mas.length-1].mast == $scope.player1[$scope.player1.length-1].mast){
  k=1;
}else{
k=0;
}
}
$scope.get2 = function () {
  $scope.player2 = MyDeck.getone2();
  if(mas[mas.length-1].rang == $scope.player2[$scope.player2.length-1].rang || mas[mas.length-1].mast == $scope.player2[$scope.player2.length-1].mast){

      k=0;
    }else{
      k=1;
    }

}
//     for (var i = 0; i < $scope.player1.length; i++) {
//    if($scope.player1[i].mast != mas[mas.length-1].mast && $scope.player1[i].rang != mas[mas.length-1].rang)
//    {
//      $scope.player1 = MyDeck.getone();
//    }
//  }
//    for (var i = 0; i < $scope.player2.length; i++) {
//   if($scope.player2[i].mast != mas[mas.length-1].mast && $scope.player2[i].rang != mas[mas.length-1].rang)
//   {
//     $scope.player2 = MyDeck.getone2();
//   }
// }

});
