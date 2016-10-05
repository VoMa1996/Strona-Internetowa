console.log('It Works!!!')

function validateForm() {
  console.log('email', $('#exampleInputEmail1').val());
}

jQuery(document).ready(function($){
  $('.icon-menu').click(function(event){
    $('.sidebar').toggleClass('active')
  });
});




function function1() {

  var ul = document.getElementById("days");
  var all_days = [];
  var l = 0;
  for(var k = 1; k <= 30; k++)
  {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode (k));
  all_days[l] = li;
  console.log(all_days[l]);
  l++;
  }


}

var start_month;
var licznik;

function buildCalendar(kol) {
    var ul = document.getElementById("days");
    var k = moment('2016-9-31');
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
}
var licz2;
var t = moment().month();

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

function addLoad() {
    $("#loader").addClass("play");
    setTimeout(function() {
        $("#loader").removeClass("play")
    }, 300);
}
var date = moment();

function activate() {
    addLoad();
    var span = document.querySelector('.currentDate');
    span.innerText = date.format('MMMM YYYY');
    var start_month = moment().startOf('month').format('dddd');
    buildCalendar(start_month);
};

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(activate);
