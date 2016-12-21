
angular

var cardApp = angular.module('cardApp', []);

cardApp.service('MyDeck', function() {

    var card = [
        {
            "name": "6♦",
            "rang": 6,
            "mast": "buba",
            "mast2": "♦",
            "score": 0
        }, {
            "name": "7♦",
            "rang": 7,
            "mast": "buba",
            "mast2": "♦",
            "score": 0
        }, {
            "name": "8♦",
            "rang": 8,
            "mast": "buba",
            "mast2": "♦",
            "score": 0
        }, {
            "name": "9♦",
            "rang": 9,
            "mast": "buba",
            "mast2": "♦",
            "score": 0
        }, {
            "name": "10♦",
            "rang": 10,
            "mast": "buba",
            "score": 10,
            "mast2": "♦"
        }, {
            "name": "B♦",
            "rang": 11,
            "mast": "buba",
            "score": 20,
            "mast2": "♦"
        }, {
            "name": "D♦",
            "rang": 12,
            "mast": "buba",
            "score": 10,
            "mast2": "♦"
        }, {
            "name": "K♦",
            "rang": 13,
            "mast": "buba",
            "score": 10,
            "mast2": "♦"
        }, {
            "name": "T♦",
            "rang": 14,
            "mast": "buba",
            "score": 15,
            "mast2": "♦"
        }, {
            "name": "6♥",
            "rang": 6,
            "mast": "czerwa",
            "mast2": "♥",
            "score": 0
        }, {
            "name": "7♥",
            "rang": 7,
            "mast": "czerwa",
            "mast2": "♥",
            "score": 0
        }, {
            "name": "8♥",
            "rang": 8,
            "mast": "czerwa",
            "mast2": "♥",
            "score": 0
        }, {
            "name": "9♥",
            "rang": 9,
            "mast": "czerwa",
            "mast2": "♥",
            "score": 0
        }, {
            "name": "10♥",
            "rang": 10,
            "mast": "czerwa",
            "score": 10,
            "mast2": "♥"
        }, {
            "name": "B♥",
            "rang": 11,
            "mast": "czerwa",
            "score": 20,
            "mast2": "♥"
        }, {
            "name": "D♥",
            "rang": 12,
            "mast": "czerwa",
            "score": 10,
            "mast2": "♥"
        }, {
            "name": "K♥",
            "rang": 13,
            "mast": "czerwa",
            "score": 50,
            "mast2": "♥"
        }, {
            "name": "T♥",
            "rang": 14,
            "mast": "czerwa",
            "score": 15,
            "mast2": "♥"
        }, {
            "name": "6♠",
            "rang": 6,
            "mast": "pika",
            "mast2": "♠",
            "score": 0
        }, {
            "name": "7♠",
            "rang": 7,
            "mast": "pika",
            "mast2": "♠",
            "score": 0
        }, {
            "name": "8♠",
            "rang": 8,
            "mast": "pika",
            "mast2": "♠",
            "score": 0
        }, {
            "name": "9♠",
            "rang": 9,
            "mast": "pika",
            "mast2": "♠",
            "score": 0
        }, {
            "name": "10♠",
            "rang": 10,
            "mast": "pika",
            "score": 10,
            "mast2": "♠"
        }, {
            "name": "B♠",
            "rang": 11,
            "mast": "pika",
            "score": 20,
            "mast2": "♠"
        }, {
            "name": "D♠",
            "rang": 12,
            "mast": "pika",
            "score": 10,
            "mast2": "♠"
        }, {
            "name": "K♠",
            "rang": 13,
            "mast": "pika",
            "score": 10,
            "mast2": "♠"
        }, {
            "name": "T♠",
            "rang": 14,
            "mast": "pika",
            "score": 15,
            "mast2": "♠"
        }, {
            "name": "6♣",
            "rang": 6,
            "mast": "kresta",
            "mast2": "♣",
            "score": 0
        }, {
            "name": "7♣",
            "rang": 7,
            "mast": "kresta",
            "mast2": "♣",
            "score": 0
        }, {
            "name": "8♣",
            "rang": 8,
            "mast": "kresta",
            "mast2": "♣",
            "score": 0
        }, {
            "name": "9♣",
            "rang": 9,
            "mast": "kresta",
            "mast2": "♣",
            "score": 0
        }, {
            "name": "10♣",
            "rang": 10,
            "mast": "kresta",
            "score": 10,
            "mast2": "♣"
        }, {
            "name": "B♣",
            "rang": 11,
            "mast": "kresta",
            "score": 20,
            "mast2": "♣"
        }, {
            "name": "D♣",
            "rang": 12,
            "mast": "kresta",
            "score": 10,
            "mast2": "♣"
        }, {
            "name": "K♣",
            "rang": 13,
            "mast": "kresta",
            "score": 10,
            "mast2": "♣"
        }, {
            "name": "T♣",
            "rang": 14,
            "mast": "kresta",
            "score": 15,
            "mast2": "♣"
        },
    ];

    // var count = Object.keys(card).length;
    // console.log(count);

    var koloda = card;

    var service = {};

    // : make generic changeCard function
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
        // return peremieshenaja koloda
    }

    service.getCards = function() {
        return koloda;
    }
   service.getMast = function () {
    var k = koloda;
    return k[k.length-1];
   }

    service.topCard = function () {

      return koloda.pop();
    }

    service.pushCards = function (cards) {

      var test = koloda.concat(cards);

      koloda = angular.copy(test);

      return koloda;

    }
    // service.pushCards (cards)
    // merge cards to koloda => changeCard(koloda)

    return service;

});

cardApp.controller('cardlist', function($scope, MyDeck) {

  function takeCard(card) {

    return card;
  }

  // var Logic = {
  //   canPlayCard: function(playerCard, tableCard) {
  //     return playerCard.mast === tableCard.mast || playerCard.rang === 11;
  //   }
  //
  // }

  var Table = function(cardss){

    var cardss = [];
    this.game = function () {
      return cardss;
    }

    this.pullAllCards = function() {
      var temp = cardss;
      cardss = [];
      return temp;
    }
      this.take = function (card) {
        cardss.push(card);
      }
      this.first = function () {
        return cardss[cardss.length-1];
      }
      this.pustoj = function () {
        cardss = [];
      }
  }

  var Player = function (name, cards, oneCard, score) {
    var cards = [];
    //this.isPlayerTurn =
    // case when ...
    this.oneCard = function() {
     return cards.pop();
    };

    this.name = name || 'unnamed player';
    this.score = score;
    // return {
    //   dajOnduKartu: oneCard,
    //   showCards: showCards
    // }
    this.takeCard = function (card) {
      cards.push(card);
    };

    this.showCards = function () {
      console.log(cards);
    };

    this.getCards = function () {
      return cards;
    }

    this.playCard = function (card , index, c) {

      // if(card.mast === "czerwa" || card.mast === "buba")
      // {
      //   $('.color').attr("class", 'cardColor2');
      // }else if(card.mast === "pika" || card.mast === "kresta")
      // {
      //   $('.color').attr("class", 'cardColor1');
      // }

    if(card.mast === $scope.table.first().mast || card.rang === $scope.table.first().rang || card.rang === 11)
    {
      if(c === "Vova" && card.rang === 8){
          $scope.player1.takeCard(MyDeck.topCard());
          $scope.player1.takeCard(MyDeck.topCard());
      }else if(c === "Lexa" && card.rang === 8){
        $scope.player2.takeCard(MyDeck.topCard());
        $scope.player2.takeCard(MyDeck.topCard());
      }

      if(c === "Vova" && card.rang === 7){
          $scope.player1.takeCard(MyDeck.topCard());

      }else if(c === "Lexa" && card.rang === 7){
        $scope.player2.takeCard(MyDeck.topCard());

      }

      if(c === "Vova" && card.rang === 13 && card.mast === "czerwa"){
          $scope.player1.takeCard(MyDeck.topCard());
          $scope.player1.takeCard(MyDeck.topCard());
          $scope.player1.takeCard(MyDeck.topCard());
          $scope.player1.takeCard(MyDeck.topCard());
          $scope.player1.takeCard(MyDeck.topCard());

      }else if(c === "Lexa" && card.rang === 13 && card.mast === "czerwa"){
        $scope.player2.takeCard(MyDeck.topCard());
        $scope.player2.takeCard(MyDeck.topCard());
        $scope.player2.takeCard(MyDeck.topCard());
        $scope.player2.takeCard(MyDeck.topCard());
        $scope.player2.takeCard(MyDeck.topCard());

      }
      $scope.table.take(card);
      cards.splice(index , 1);
    }else{
      console.log("Try Again!!!");
      console.log($scope.player1.getCards().length);
    }
    if($scope.player1.getCards().length < 1 || $scope.player2.getCards().length < 1){
      if($scope.player1.getCards().length < 1){
        var score = $scope.player2.getCards();
        var printScore = 0;
        for(var k=0; k<score.length; k++)
        {
          printScore = printScore + score[k].score;
          if(k === score.length-1)
          {
            console.log("Game Over", "Score:", $scope.player2.name ,printScore);
          }
        }
      }else{
        var score = $scope.player1.getCards();
        var printScore = 0;
        for(var k=0; k<score.length; k++)
        {
          printScore = printScore + score[k].score;
          if(k === score.length-1)
          {
            console.log("Game Over");
            console.log("Score:", $scope.player1.name ,printScore);
          }
        }
      }

    }







    }



    // this.playCard = function (index) {
    //   if (Logic.canPlayCard(cards[index], Table.getTopCard())) {
    //     console.log('you can go');
    //     // Table.put(cards.splice(...));
    //   } else {
    //     console.log('NO!!');
    //   }
    // }


}



  $scope.player1 = new Player("Lexa");
  $scope.player2 = new Player("Vova");
  $scope.table = new Table();

  MyDeck.changeCard();

  $scope.cards = MyDeck.getCards;

  for(var licz = 0; licz < 5; licz++){
    $scope.player1.takeCard(MyDeck.topCard());
    $scope.player2.takeCard(MyDeck.topCard());
    console.log();

  }

$scope.table.take($scope.player1.oneCard());

$scope.get = function () {


var k ;
k = MyDeck.getMast();

console.log(k);
$scope.player1.takeCard(MyDeck.topCard());
  // if(k.mast === "czerwa" || k.mast === "buba")
  // {
  //   $("li[$index]").remove("class", 'cardColor1');
  //   $("li[$index]").attr("class", 'cardColor2');
  //
  //
  // }else if(k.mast === "pika" || k.mast === "kresta")
  // {
  //   $("li[$index]").remove("class", 'cardColor2');
  //   $("li[$index]").attr("class", 'cardColor1');
  // }






  if(MyDeck.getCards().length < 1)
  {
    MyDeck.pushCards($scope.table.pullAllCards());

    $scope.table.take(MyDeck.topCard());

    console.log($scope.cards[$scope.cards.length-1]);
    console.log(MyDeck.getCards());

  }
}

$scope.get2 = function () {
  $scope.player2.takeCard(MyDeck.topCard());
  if(MyDeck.getCards().length < 1)
  {
    MyDeck.pushCards($scope.table.pullAllCards());

    $scope.table.take(MyDeck.topCard());

    console.log($scope.cards[$scope.cards.length-1]);
    console.log(MyDeck.getCards());

  }
}
console.log(MyDeck.getCards());
console.log($scope.table.game());


var k = 0;
//
// $scope.play = function(c , b)  {
//
// }
//
// $scope.play2 = function(c , b) {
//
//       if(k==0){
//
//
//         if(mas[mas.length - 1].mast == c.mast || mas[mas.length - 1].rang == c.rang ||  c.rang == 11){
//           mas.push(c);
//           $scope.player2.getCards().splice(b, 1);
//
//           $scope.table = mas;
//           if(mas[mas.length - 1].rang == 8 )
//           {
//             $scope.player1.takeCard(MyDeck.topCard());
//             $scope.player1.takeCard(MyDeck.topCard());
//             k=0;
//           }else if(mas[mas.length - 1].rang == 7){
//
//                 $scope.player1.takeCard(MyDeck.topCard());
//                 k=1;
//
//           }else if(mas[mas.length - 1].rang == 14 || mas[mas.length - 1].rang == 6){
//
//             k=0;
//           }else{
//           k=1;
//           }
//         }else {
//           console.log("Try Again");
//         }
//
//
//       }else{
//         console.log("not you now!");
//       }
//
// }
// console.log(c);

});

// var mas = [];
//
//
//     MyDeck.changeCard();
//     $scope.cards = MyDeck.getCards();
//     $scope.player1 = MyDeck.getp1();
//     $scope.player2 = MyDeck.getp2();
//     mas.push($scope.player1.pop());
//     $scope.table = mas;
//
//
//
//     var k=0;
//
//     $scope.play = function(c, b) {
//
//
//
//         if(k==1){
//
//
//
//       if(mas[mas.length -1].mast == c.mast ||  mas[mas.length -1].rang == c.rang || c.rang == 11){
//         mas.push(c);
//         $scope.player1.splice(b, 1);
//
//         $scope.playg = mas;
//         if(mas[mas.length-1].rang == 8 )
//         {
//           $scope.player2 = MyDeck.getone2();
//           $scope.player2 = MyDeck.getone2();
//           k=1;
//         }else if(mas[mas.length - 1].rang == 7){
//
//               $scope.player2 = MyDeck.getone2();
//               k=0;
//
//         }else if(mas[mas.length-1].rang == 14 || mas[mas.length-1].rang == 6 ){
//
//           k=1;
//         }else{
//         k=0;
//         }
//
//
//       }else {
//         mas = mas[mas.length-1];
//         console.log("Try Again");
//         // console.log(mas);
//
//       }
//     }else{
//       console.log("Not you now!");
//     }
//
//
//     }
//
//     $scope.play2 = function(c, b) {
//
//       if(k==0){
//
//
//         if(mas[mas.length - 1].mast == c.mast || mas[mas.length - 1].rang == c.rang ||  c.rang == 11){
//           mas.push(c);
//           $scope.player2.splice(b, 1);
//
//           $scope.playg = mas;
//           if(mas[mas.length - 1].rang == 8 )
//           {
//             $scope.player1 = MyDeck.getone();
//             $scope.player1 = MyDeck.getone();
//             k=0;
//           }else if(mas[mas.length - 1].rang == 7){
//
//                 $scope.player1 = MyDeck.getone();
//                 k=1;
//
//           }else if(mas[mas.length - 1].rang == 14 || mas[mas.length - 1].rang == 6){
//
//             k=0;
//           }else{
//           k=1;
//           }
//         }else {
//           console.log("Try Again");
//         }
//
//
//       }else{
//         console.log("not you now!");
//       }
//
//
//
// $scope.get = function () {
//   if($scope.cards.length==1)
//   {
//
//     MyDeck.card = angular.copy(mas);
//     $scope.cards = MyDeck.card;
//
//     $scope.playg = mas;
//   }
//
// }
// $scope.get2 = function () {
//
//   $scope.player2 = MyDeck.getone2();
//   if(mas[mas.length-1].rang == $scope.player2[$scope.player2.length-1].rang || mas[mas.length-1].mast == $scope.player2[$scope.player2.length-1].mast){
//
//       k=0;
//     }else{
//       k=1;
//     }
//
// }
//
