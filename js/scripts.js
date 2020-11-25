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
    Username: 'be.rightmuk@gmail.com',
    Password: 'gikvmenrlobwirzo',
    To: 'be.rightmuk@gmail.com',
    From: 'be.rightmuk@gmail.com',
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