console.log('It Works!!!')

function validateForm() {
  console.log('email', $('#exampleInputEmail1').val());
}

jQuery(document).ready(function($){
  $('.icon-menu').click(function(event){
    $('.sidebar').toggleClass('active')
  });
});
