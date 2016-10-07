console.log('It Works!!!')

function validateForm() {
  console.log('email', $('#exampleInputEmail1').val());
}

jQuery(document).ready(function($){
  $('.icon-menu').click(function(event){
    $('.sidebar').toggleClass('active')
  });
});



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
    var nowDate = moment().date();
    $('.days li').eq(nowDate+licznik-1).addClass("active");
    //  $('.days li').eq(nowDate+licznik-1).addClass("btn btn-default super");
    // $('.days li').eq(nowDate+licznik-1).attr('data-toggle','popover');
    // $('.days li').eq(nowDate+licznik-1).attr('data-placement','bottom');
    // $('.days li').eq(nowDate+licznik-1).attr('data-content',' ' );
    //
    // $(document).ready(function(){
    //     $('[data-toggle="popover"]').popover();
    // });

};

function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(activate);
