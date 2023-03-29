//show loader on page load
setTimeout(function(){
  $('.loader-bg').fadeToggle();
},1500);

$(document).bind("contextmenu",function(e) {
  e.preventDefault();
 });
 $(document).keydown(function(e){
     if(e.which === 123){
        return false;
     }
 });

$(document).ready(function(){
  // readTheme();
    $(window).scroll(function(){

      const distance = window.pageYOffset;
      //cog wheel rotation on scroll
      //layer one
      $(".cog-one").css('transform', `rotate(${distance/2 }deg)`);
      $(".cog-two").css('transform', `rotate(${distance }deg)`);
      $(".cog-three").css('transform', `rotate(${-distance/4 }deg)`);
      // layer two
      $(".cog-four").css('transform', `rotate(${distance/6 }deg)`);
      $(".cog-five").css('transform', `rotate(${-distance/12 }deg)`);
      $(".cog-six").css('transform', `rotate(${distance/6 }deg)`);

      //sticky nav
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
    $('.navbar .menu li a').click(function(){
      $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });
})

//scroll indicator
function scrollIndication() {
  var hori = document.documentElement.scrollLeft;
  console.log(hori)
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-indicator").style.width = scrolled + "%";
  }
//contact form submission
document.querySelector('.contact-form').addEventListener('submit',submitForm);
function submitForm(e){
  e.preventDefault();

  let name = document.querySelector('.name').value;
  let email = document.querySelector('.email').value;
  let message = document.querySelector('.message').value;

  Email.send({
    Host: process.env.EMAIL_HOST,
    Username: process.env.EMAIL_USERNAME,
    Password: process.env.EMAIL_PASSWORD,
    To: process.env.EMAIL_USERNAME,
    From: email,
    Subject: `${name} has sent you a message from the portfolio`,
    Body: ` ${message}`,

  }).then((message)=>{
    showAlert(message);
  }).catch((e)=>{
    console.log(e)
    showAlert('Your message was not sent!');
  });
}

//show message sent alert
function showAlert(message){
  console.log(message);
  if(message!='OK'){
    $('.mail-not-sent').addClass('visible')
    setTimeout(function(){$('.mail-not-sent').removeClass('visible') }, 5000);
  }else{
    document.querySelector('.contact-form').reset();
    $('.mail-sent').addClass('visible')
    setTimeout(function(){$('.mail-sent').removeClass('visible') }, 5000);
  }
}


//scroll back to top
var rootElement = document.documentElement
var scrollToTopBtn= document.querySelector(".back-top")
function scrollToTop() {
  //scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}


// scrollToTopBtn.addEventListener("click", scrollToTop)

//show project modal
$(document).ready(function(){
  $(".related-work").click(function(){
    $(".modal-bg").animate({top: '0'},500);
    $(".navbar").addClass("navbar-hidden")
    
  });
  $(".close").click(function(){
    $(".modal-bg").animate({top: '-100%'},500);
    $(".navbar").removeClass("navbar-hidden")
  });

});

//theme control
// document.getElementById("theme-switch").addEventListener("click", changeTheme);

function changeTheme(){

var cookie = decodeURIComponent(document.cookie).split(';');

var isDarkTheme = cookie.includes('darktheme');
console.log(cookie)
console.log(isDarkTheme);

var darkThemeData = {
  primaryTextColor: "white",
  secondaryTextColor:"rgb(188, 175, 69)",
  backgroundColor:"black",
}

var lightThemeData = {
  primaryTextColor: "black",
  secondaryTextColor:"grey",
  backgroundColor:"#DDD1C7",
}
if(!isDarkTheme){
  document.cookie = "darktheme";
}else{
  document.cookie = "lighttheme";
}

document.getElementById('cogs').style.backgroundColor = !isDarkTheme?darkThemeData.backgroundColor:lightThemeData.backgroundColor;
var btns = document.getElementsByClassName("btn");
for(var i=0;i<btns.length;i++){
  btns[i].classList.remove(isDarkTheme?'btn-dark':'btn-light');
  btns[i].classList.add(isDarkTheme?'btn-light':'btn-dark');
}
}

function readTheme(){
  var cookie = decodeURIComponent(document.cookie).split(';');

  var isDarkTheme = cookie.includes('darktheme');

  var darkThemeData = {
    primaryTextColor: "white",
    secondaryTextColor:"rgb(188, 175, 69)",
    backgroundColor:"black",
  }

  var lightThemeData = {
    primaryTextColor: "black",
    secondaryTextColor:"grey",
    backgroundColor:"#DDD1C7",
  }
  console.log('Going dark theme... ', isDarkTheme)
  document.getElementById('cogs').style.backgroundColor = isDarkTheme?darkThemeData.backgroundColor:lightThemeData.backgroundColor
  var btns = document.getElementsByClassName("btn");
  for(var i=0;i<btns.length;i++){
    btns[i].classList.remove(isDarkTheme?'btn-light':'btn-dark');
    btns[i].classList.add(isDarkTheme?'btn-dark':'btn-light');
  }
}

var date = new Date();
var year = date.getFullYear();
document.getElementById('year').innerHTML=year;

//splide
document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '#projects', {
  type    : 'loop',
  perPage : 1,
  interval:6000,
  autoplay: true,
  autoWidth: true,
  });
  splide.mount();
  } );