$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        margin: 30,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        autoplaySpeed: 10000/true,
        nav:true,
        // navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'></div>"],
        navText: ["<div class='nav-button owl-next'><img src='./images/prev.png'></div>","<div class='nav-button owl-next'><img src='./images/next.png'></div>"],
        responsive:{
            390:{
                items:1,
                nav:true,
            },
            700:{
                items:2,
                nav:true,
            },
            1360:{
                items:3,
                lnav:true,
            }
        }
    
    });
  });