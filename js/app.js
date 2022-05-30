$(function () {
  $('.head-slider').owlCarousel({
    dots: false,
    items: 1,
    nav: true,
    navText: [
      '<div ><span class="left"><i class="bi bi-arrow-left"></i></span></div>',
      '<div ><span class="right"><i class="bi bi-arrow-right"></i></span></div>',
    ],
    autoplay:true,
    loop: true,
  })

  $('.projects-slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    swipe: true,
    fade: false,
    // variableWidth: true,
    pauseOnHover: true,
    touchMove: true,
    draggable: true,
    autoplay: true,
    // speed: 600,
    // autoplaySpeed: 600,
    prevArrow: $('.projects .prev'),
    nextArrow: $('.projects .next'),
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          touchMove: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  })

    $('#lang-trigger').click(function() {
        $('.lang-drop').slideToggle(100);
       
    });

  window.onscroll = function () { myFunction() };

  function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.querySelector('header').classList.add('scroll')
    } else {
      document.querySelector('header').classList.remove('scroll')
    }
  }
  
  $('.like-icon').click(function(event) {
  $(this).siblings().removeClass('active');
  $(this).toggleClass('active');
    event.preventDefault();
})

$('.dislike-icon').click(function(event) {
  $(this).siblings().removeClass('active');
  $(this).toggleClass('active');
    event.preventDefault();
})

  
})