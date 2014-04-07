$( document ).ready(function() {
    console.log( "ready!" );
    $("button#do_thing").on('click',function(e){
      // console.log(e);
      $(".alert").slideToggle();
      // console.log(this);
      my_val = $('#my_input').val();
      console.log(my_val);
      $(this).html(my_val);

    });
});