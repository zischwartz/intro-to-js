$( document ).ready(function() {
    console.log( "ready!" );
    $("button#do_thing").on('click',function(e){
      // slide toggle the alert
      var value = $("#my_input").val();
      // console.log(value);
      // get the value of the input
      $('h1').html(value);
      $('body').css('background-color', value);

    });
});