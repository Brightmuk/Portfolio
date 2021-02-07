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
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }

//swiper
    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


//show loader on page load
setTimeout(function(){
  $('.loader-bg').fadeToggle();
},1500);

//contact form submission
document.querySelector('.contact-form').addEventListener('submit',submitForm);
function submitForm(e){
  e.preventDefault();

  let name = document.querySelector('.name').value;
  let email = document.querySelector('.email').value;
  let message = document.querySelector('.message').value;

  document.querySelector('.contact-form').reset();

  Email.send({
    Host: 'smtp.gmail.com',
    Username: 'lebrightdesigns@gmail.com',
    Password: 'xqsvipwybjupxeha',
    To: 'lebrightdesigns@gmail.com',
    From: 'lebrightdesigns@gmail.com',
    Subject: `${name} has sent you a message from your portfolio`,
    Body: `Name:${name} <br> Email: ${email}<br>  ${message}`,

  }).then((message)=>showAlert())
}

//show message sent alert
function showAlert(){
  $('.alert').removeClass('mail-not-sent')
setTimeout(function(){$('.alert').addClass('mail-not-sent')  }, 3000);
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
scrollToTopBtn.addEventListener("click", scrollToTop)

//show project modal
$(document).ready(function(){
  $(".view-project").click(function(){
    $(".modal-bg").animate({top: '0'},800);
  });
  $(".close").click(function(){
    $(".modal-bg").animate({top: '-100%'},600);
  });

});
