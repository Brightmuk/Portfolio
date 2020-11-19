$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            scrollIndication();
            $('.navbar').addClass('sticky');
            $('.progress-container').css("display","block");
            $('.progress-bar').css("display","block");
        }else{
            $('.navbar').removeClass('sticky');
            $('.progress-container').css("display","none");
            $('.progress-bar').css("display","none");
        }
    });
    // toggle menu script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
})

//scroll indicator
function scrollIndication() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

//slider script
var slideIndex = 1;
showSlides1(slideIndex);

function plusSlides1(n) {
  showSlides1(slideIndex += n);
}

function currentSlide1(n) {
  showSlides1(slideIndex = n);
}

function showSlides1(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-1");
  var dots = document.getElementsByClassName("dot-1");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

setTimeout(function(){
  $('.loader-bg').fadeToggle();
},1500);

//    /* Preloader
//     * -------------------------------------------------- */
//    var clPreloader = function() {
        
//     $("html").addClass('cl-preload');

//     $WIN.on('load', function() {

//         //force page scroll position to top at page refresh
//         $('html, body').animate({ scrollTop: 0 }, 'normal');

//         // will first fade out the loading animation 
//         $("#loader").fadeOut("slow", function() {
//             // will fade out the whole DIV that covers the website.
//             $("#preloader").delay(300).fadeOut("slow");
//         }); 
        
//         // for hero content animations 
//         $("html").removeClass('cl-preload');
//         $("html").addClass('cl-loaded');
    
//     });
// };