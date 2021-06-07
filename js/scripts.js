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
    Subject: `${name} has sent you a message from your portfolio`,
    Body: ` ${message}`,

  }).then((message)=>{
    showAlert(message);
  })
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

var projectScroll = document.getElementById('projects-list');
projectScroll.addEventListener("scroll", (event) => {
    console.log(projectScroll.scrollLeft)

});

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

var date = new Date();
var year = date.getFullYear();
document.getElementById('year').innerHTML=year;
