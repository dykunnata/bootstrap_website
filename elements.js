// function fade() {
//     $('.preloader').fadeOut("slow");
//     }
//     setTimeout(fade, 3000);
//     console.log("hello");
    
//     setTimeout( function() {
//     $(".hiddenSlide").fadeIn();
//     }, 3500);
     
//     setTimeout( function() {
//     $("#fadeIn").fadeIn();
//     }, 3700);
    
//     setTimeout( function() {
//     $("#tourFade").fadeIn();
//     }, 3900);
    
//     $(".toggle").click(function(){
//       $(this).find(".toggleContainer").toggleClass("active");
//       $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
//     });
    
jQuery(document).ready(function($) {
    var Body = $('body');
    Body.addClass('preloader-site');
});
$(window).load(function(){
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
});

