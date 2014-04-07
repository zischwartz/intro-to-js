$( document ).ready(function() {
    some_colors = ['#428bca', '#5cb85c', '#f0ad4e', '#5bc0de'];

    console.log( "ready!" );

    $("button#do_thing").on('click',function(e){
      var random_int = Math.round(Math.random()*3);
      console.log(random_int);
      // pick a color, apply it to the body
    });

    $("form").on('submit',function(e){
      e.preventDefault();
      color = $('#my_input').val();
      $('body').css('background-color', color);
    });
});