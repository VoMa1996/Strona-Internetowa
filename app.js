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
