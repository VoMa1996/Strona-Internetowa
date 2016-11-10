function validateForm() {
    console.log('email', $('#exampleInputEmail1').val());
}
var start_month;
var licznik;

function buildCalendar(kol) {

    var ul = document.getElementById("days");

    if (kol == "Saturday") {
        licznik = 5;
    } else if (kol == "Sunday") {
        licznik = 6;
    } else if (kol == "Monday") {
        licznik = 0;
    } else if (kol == "Tuesday") {
        licznik = 1;
    } else if (kol == "Wednesday") {
        licznik = 2;
    } else if (kol == "Thursday") {
        licznik = 3;
    } else if (kol == "Friday") {
        licznik = 4;
    }
    for (var k = 1; k <= licznik; k++) {

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(' '));
        ul.appendChild(li);

    }
    for (var k = 1; k <= date.daysInMonth(); k++) {

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(k));
        ul.appendChild(li);

    }
    $('.days li').attr("onclick", 'add()');
}

function clock() {
    var ul = document.getElementById("clock");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(moment().format("H:mm")));
    ul.appendChild(li);
}

var licz2;


function back() {
    addLoad();
    $("#days").empty();
    var span = document.querySelector('.currentDate');
    span.innerText = date.add(-1, 'month').format('MMMM YYYY');
    var currentMonth = date.format('MM') - 1;
    start_month = date.startOf('month').month(currentMonth).format('dddd');
    buildCalendar(start_month);
}

function next() {
    addLoad();
    $("#days").empty();
    var span = document.querySelector('.currentDate');
    span.innerText = date.add(1, 'month').format('MMMM YYYY');
    var currentMonth = date.format('MM') - 1;
    start_month = date.startOf('month').month(currentMonth).format('dddd');
    buildCalendar(start_month);
}

function next1() {
    addLoad();
    document.getElementById("block1");

    $("#block1").empty();


    $('.block').attr("onclick", 'add()');

    //  var img = document.querySelector('.block');
    // span.innerText = date.add(1, 'month').format('MMMM YYYY');
    // var currentMonth = date.format('MM') - 1;
    // start_month = date.startOf('month').month(currentMonth).format('dddd');
    // buildCalendar(start_month);
}






function add() {
    $('.sidebar').toggleClass('active2')
}

function remAct() {
    $(".container").addClass("active3");
}

function load() {
    setTimeout(function() {
        $(".container").addClass("active3")
    }, 500);
    setTimeout(function() {
        $(".fullLoad").addClass("active3")
    }, 500);
    var embed = document.getElementById(".startEngine");
    $('#startEngine').attr("src", "Photos/start.mp3");
    $('#startEngine').attr("autostart", "true");
    $('#startEngine').attr("loop", "true");
    $('#startEngine').attr("width", "2");
    $('#startEngine').attr("height", "0");

}
function addLoad() {
    $("#loader").addClass("play");
    setTimeout(function() {
        $("#loader").removeClass("play")
    }, 300);
}
var date = moment();

function activate() {
    // load();
    // clock();
    addLoad();
    var span = document.querySelector('.currentDate');
    span.innerText = date.format('MMMM YYYY');
    var start_month = moment().startOf('month').format('dddd');

    buildCalendar(start_month);
    var nowDate = moment().date();
    $('.days li').eq(nowDate + licznik - 1).addClass("active");
    $('.days li').addClass("add");


};

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(activate);

$(document).ready(function($) {
    $(".icon-menu").click(function(event) {
        $(".sidebar").toggleClass("active")
    });
});





angular.module('ToDo',[]).
controller('todoController',['$scope', function($scope){
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
