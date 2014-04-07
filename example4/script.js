
$( document ).ready(function() {
    some_colors = ['#428bca', '#5cb85c', '#f0ad4e', '#5bc0de'];

    console.log( "ready!" );

    $("button#do_thing").on('click',function(e){
      var random_int = Math.round(Math.random()*3);
      console.log(random_int);
      // pick a color, apply it to the body

    });

    $("form").on('submit', changeColor);

});


changeColor = function(e){
  //prevent default
  // get the value of the input
  // apply it to the body

};