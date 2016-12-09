
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


    return service;

});

cardApp.controller('cardlist', function($scope, MyDeck) {

    MyDeck.changeCard();
    $scope.cards = MyDeck.getcard();

    $scope.player1 = MyDeck.getp1();
    $scope.player2 = MyDeck.getp2();


    // $scope.player1 = MyDeck.pullCard();
    // $scope.player2 = MyDeck.pullCard();
    // $scope.player1 = MyDeck.pullCard();
    // $scope.player2 = MyDeck.pullCard();









    var mas = [];
    $scope.play = function(c, b) {

        mas.push(c);
        console.log(MyDeck.player1);

        console.log(c);

        $scope.player1.splice(b, 1);
        // $scope.player1 = MyDeck.player1.splice(c,1);
    }
    $scope.playg = mas;


});
