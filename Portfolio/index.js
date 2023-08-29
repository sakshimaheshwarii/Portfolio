$(document).ready(function() {
    $(window).on('scroll', function() {
        var navbar = $('.navbar');
        var logoSpan = $('.logo a span');


        if ($(window).scrollTop() > 0) {
            navbar.addClass('sticky');
            logoSpan.css('color', '#fff');
        } else {
            navbar.removeClass('sticky');
            logoSpan.css('color', 'crimson');
        }
    });

    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
    });

    $('.menu-btn').click(function(){
        $('navbar .menu-btn').toggleClass("active");
        $('menu-btn i').toggleClass("active");
    });

    var typed=new Typed(".typing",{
        strings:["Web Developer", "Graphic Designer", "Content Creator","Freelancer"],
        typeSpeed:90,
        backSpeed:100,
        loop:true
    });

    var typed=new Typed(".typing-2",{
        strings:["Web developer", "Graphic Designer", "Content Creator","Freelancer"],
        typeSpeed:90,
        backSpeed:100,
        loop:true
    });

    window.onload = function(){
        var preloader=document.getElementById("preloader");
        var body=document.getElementById("body");
    preloader.style.display="block";
    setTimeout(function(){
        preloader.style.display="none";
        body.style.display="block";
    }, 1000);
    };

    $("#toggle").click(function() {
            var element = $("#toggle").text();
            if (element == "Read More") {
              $("#toggle").text("Read Less");
              $("#toggle").css('transform', 'translateY(-8px)');
              $("#text").slideDown();
            } else {
                $("#toggle").text("Read More");
                $("#text").slideUp();
                $("#toggle").css('transform', 'translateY(-126px)');
                $("#toggle").css('transition-delay', '0.2s');
            }
          });

          var button = document.querySelector(".button-area button");

          button.addEventListener("click", function() {
              window.alert("Sent!"+"\n"+"I'll respond within the next 48 hours." );
          });

          var dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            this.querySelector('.dropdown-content').classList.toggle('show');
        });
    });
    
});