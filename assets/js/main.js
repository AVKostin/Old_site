$(document).ready(function(){
    $('.center').slick({
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2500,
      speed: 1500,
      centerPadding: '10px',
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 993,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1
          }
        },

        {
          breakpoint: 769,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 577,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1
          }

        },
        {
          breakpoint: 450,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1
          }

        }

      ]
    });
});


$(document).ready(function(){
  $('.center-2').slick({
    centerMode: true,
    /* autoplay: true, */
    autoplaySpeed: 2500,
    speed: 1500,
    centerPadding: '20px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 2
        }
      },

      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 577,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }

      },
      {
        breakpoint: 450,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '5px',
          slidesToShow: 1
        }

      }

    ]
  });
});

$(document).ready(function(){
  $('.specialists__set').slick({
    centerMode: true,
    /* autoplay: true, */
    autoplaySpeed: 2500,
    speed: 1500,
    centerPadding: '80px',
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 2
        }
      },

      {
        breakpoint: 769,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '120px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 577,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1
        }

      },
      {
        breakpoint: 450,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 1
        }

      },
      {
      breakpoint: 380,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }

    }

    ]
  });
});

/* document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.footer__circle');

  btn.addEventListener('click', function(e) {
      e.preventDefault();
      const header = document.querySelector('header');
      header.scrollIntoView({ behavior: 'smooth' });
  });
}); */
// document.addEventListener('DOMContentLoaded', function() {
//   const btn = document.querySelector('.footer__circle');

//   btn.addEventListener('click', function(e) {
//       e.preventDefault();
//       const firstSection = document.querySelector('section'); // Выбираем первый элемент <section>
//       firstSection.scrollIntoView({ behavior: 'smooth' });
//   });
// });

//burger

$(document).ready(function(){
  $('.header-menu').click(function(event){
    $('.menu').toggleClass('active-menu');

  });
  var headerMenu = $('.header-menu');
  var menuImage = headerMenu.find('.menu-black');
  var menuImageSrc = menuImage.attr('src'); // Сохраняем исходный src изображения

  headerMenu.on('click', function() {
      if (menuImage.attr('src') === menuImageSrc) {
          menuImage.attr('src', 'assets/img/x.png');
      } else {
          menuImage.attr('src', menuImageSrc);
      }
  });
});







//header

$(function() {
  let header = $('.header');
  let headerHeight = header.outerHeight(); // Use outerHeight() to include padding, border, and margin

  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
     header.addClass('scrolled');
     $('body').css({
        'paddingTop': headerHeight + 'px'
     });
    } else {
     header.removeClass('scrolled');
     $('body').css({
      'paddingTop': 0
     })
    }
  });
});




