
$( document ).ready(function() {
    some_colors = ['#428bca', '#5cb85c', '#f0ad4e', '#5bc0de'];

    console.log( "ready!" );

    $("button#do_thing").on('click',function(e){
      var random_int = Math.round(Math.random()*3);
      console.log(random_int);
      var color = some_colors[random_int];
      $('body').css('background-color', color);
    });

    $("form").on('submit', changeColor);

});


changeColor = function(e){
  e.preventDefault();
  color = $('#my_input').val();
  $('body').css('background-color', color);
};