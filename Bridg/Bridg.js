
document.getElementById('plus1').value = 0;
document.getElementById('plus2').value = 0;
document.getElementById('plus3').value = 0;
document.getElementById('plus4').value = 0;

document.getElementById('small1').value = 0;
document.getElementById('small2').value = 0;
document.getElementById('small3').value = 0;
document.getElementById('small4').value = 0;

function add() {

  var a1 = parseInt(document.getElementById('plus1').value);
  var b1 = parseInt(document.getElementById('small1').value);

			var c1 = a1 + b1;

			document.getElementById('endScore1').value = c1;
      document.getElementById('plus1').value = 0;
      document.getElementById('small1').value = c1;



      var a2 = parseInt(document.getElementById('plus2').value);
      var b2 = parseInt(document.getElementById('small2').value);

    			var c2 = a2 + b2;

    			document.getElementById('endScore2').value = c2;
          document.getElementById('plus2').value = 0;
          document.getElementById('small2').value = c2;

//----------------------------------------------------------------

          var a3 = parseInt(document.getElementById('plus3').value);
          var b3 = parseInt(document.getElementById('small3').value);

              var c3 = a3 + b3;

              document.getElementById('endScore3').value = c3;
              document.getElementById('plus3').value = 0;
              document.getElementById('small3').value = c3;

//----------------------------------------------------------------

              var a4 = parseInt(document.getElementById('plus4').value);
              var b4 = parseInt(document.getElementById('small4').value);

                  var c4 = a4 + b4;

                  document.getElementById('endScore4').value = c4;
                  document.getElementById('plus4').value = 0;
                  document.getElementById('small4').value = c4;

      if(c1 > 300)
      {
        document.getElementById('end').innerHTML = "END";
      }


}
