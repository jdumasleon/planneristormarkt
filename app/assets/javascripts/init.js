(function($){
  $(function(){

    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.button-collapse').sideNav();

    $('.head-link').click(function(e) {
       e.preventDefault();

       var goto = $(this).attr('href');

       $('html, body').animate({
           scrollTop: $(goto).offset().top
       }, 800);
   });

   $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
