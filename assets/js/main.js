$(function () {

  'use strict';

  // AOS.init();

  // ---- settings popup form ---- //
  $('.btn_tel').click(function () {
      $('.popup-form').addClass('active');
      $('body').css('overflow', 'hidden');
      $('form.popup-form__form input[name="fname"]').val('Форма з поп-папу по кнопці '+$(this).html());
  });
  $('.close').click(function () {
      $('.popup-form').removeClass('active');
      $('body').css('overflow', 'visible');
  });

  $(document).mouseup(function (e) {
      let container = $(".popup-form");
      if (container.has(e.target).length === 0) {
          container.removeClass('active');
          $('body').css('overflow', 'visible');
      }
  });

  // ---- anim mobile menu ---- //
  $('.header__burger').click(function () {
      $('header.header').toggleClass('open');
      $('body').toggleClass('no__scroll');
      //var menu_height = $(window).height() - $('header.open').outerHeight();
     // $('.header__mob-bottom').outerHeight(menu_height);
  });


    // ---- button up ---- //
    function buttonUp() {
      $('.up').click(function () {
          var up = $('main').offset().top;
          $('html, body').animate({ scrollTop: up }, 350);
      });

      $(window).scroll(function () {
          let scrollDock = $(document).scrollTop();
          if (scrollDock + 80 >= 400) {
              $('.up').fadeIn();
              $('.EWBookingWidgetTrigger').css('opacity','1');
          } else {
              $('.up').fadeOut();
              $('.EWBookingWidgetTrigger').css('opacity','0');
          }
      });
  }
  buttonUp();
});


// $(document).ready(function(){
//     $('.center').slick({
//       centerMode: true,
//       autoplay: true,
//       autoplaySpeed: 2500,
//       speed: 1500,
//       centerPadding: '10px',
//       slidesToShow: 1,
//       responsive: [
//         {
//           breakpoint: 993,
//           settings: {
//             arrows: false,
//             centerMode: true,
//             centerPadding: '10px',
//             slidesToShow: 1
//           }
//         },

//         {
//           breakpoint: 769,
//           settings: {
//             arrows: false,
//             centerMode: true,
//             centerPadding: '10px',
//             slidesToShow: 1
//           }
//         },
//         {
//           breakpoint: 577,
//           settings: {
//             arrows: false,
//             centerMode: true,
//             centerPadding: '10px',
//             slidesToShow: 1
//           }

//         },
//         {
//           breakpoint: 450,
//           settings: {
//             arrows: false,
//             centerMode: true,
//             centerPadding: '0',
//             slidesToShow: 1
//           }

//         }

//       ]
//     });
// });


// $(document).ready(function(){
//   $('.center-2').slick({
//     centerMode: true,
//     /* autoplay: true, */
//     autoplaySpeed: 2500,
//     speed: 1500,
//     centerPadding: '20px',
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 993,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '20px',
//           slidesToShow: 2
//         }
//       },

//       {
//         breakpoint: 769,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '20px',
//           slidesToShow: 2
//         }
//       },
//       {
//         breakpoint: 577,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '20px',
//           slidesToShow: 1
//         }

//       },
//       {
//         breakpoint: 450,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '5px',
//           slidesToShow: 1
//         }

//       }

//     ]
//   });
// });

// $(document).ready(function(){
//   $('.specialists__set').slick({
//     centerMode: true,
//     /* autoplay: true, */
//     autoplaySpeed: 2500,
//     speed: 1500,
//     centerPadding: '80px',
//     slidesToShow: 2,
//     responsive: [
//       {
//         breakpoint: 993,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '10px',
//           slidesToShow: 2
//         }
//       },

//       {
//         breakpoint: 769,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '120px',
//           slidesToShow: 1
//         }
//       },
//       {
//         breakpoint: 577,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '30px',
//           slidesToShow: 1
//         }

//       },
//       {
//         breakpoint: 450,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '30px',
//           slidesToShow: 1
//         }

//       },
//       {
//       breakpoint: 380,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '0',
//         slidesToShow: 1
//       }

//     }

//     ]
//   });
// });

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


//========================= original =========================

// $(document).ready(function(){
//   $('.header-menu').click(function(event){
//     $('.menu').toggleClass('active-menu');

//   });
//   var headerMenu = $('.header-menu');
//   var menuImage = headerMenu.find('.menu-black');
//   var menuImageSrc = menuImage.attr('src'); // Сохраняем исходный src изображения

//   headerMenu.on('click', function() {
//       if (menuImage.attr('src') === menuImageSrc) {
//           menuImage.attr('src', 'assets/img/x.png');
//       } else {
//           menuImage.attr('src', menuImageSrc);
//       }
//   });
// });


//==================================================

// document.addEventListener('DOMContentLoaded', function() {
//   // Обработчик клика на пункты меню
//   var menuLinks = document.querySelectorAll('.menu .nav__list-item-link');
//   menuLinks.forEach(function(link) {
//     link.addEventListener('click', function(event) {
//       // Проверяем, является ли ссылка якорной ссылкой
//       if (this.getAttribute('href').startsWith('#')) {
//         // Отменяем стандартное действие перехода по ссылке
//         event.preventDefault();

//         // Получаем целевой элемент по идентификатору из хэша ссылки
//         var targetId = this.getAttribute('href').substring(1);
//         var target = document.getElementById(targetId);

//         // Проверяем, существует ли целевой элемент
//         if (target) {
//           // Вычисляем позицию элемента с учетом высоты фиксированного меню
//           var offset = target.offsetTop - document.querySelector('.nav').offsetHeight;

//           // Плавно прокручиваем до целевого элемента с использованием smooth-scrolling
//           window.scrollTo({
//             top: offset,
//             behavior: 'smooth'
//           });

//           // Закрываем мобильное меню
//           document.querySelector('.menu').classList.remove('active-menu');
//           document.querySelector('.menu-black').src = 'assets/img/x.png';
//         }
//       }
//     });
//   });

//   // Обработчик клика на кнопку мобильного меню
//   var menuToggle = document.querySelector('.header-menu');
//   menuToggle.addEventListener('click', function() {
//     document.querySelector('.menu').classList.toggle('active-menu');

//     // Изменяем иконку меню
//     var menuImage = document.querySelector('.menu-black');
//     var menuImageSrc = menuImage.src;

//     if (menuImage.src.includes('menu.png')) {
//       menuImage.src = 'assets/img/x.png';
//     } else {
//       menuImage.src = 'assets/img/menu.png';
//     }
//   });
// });



//======================================================

document.addEventListener('DOMContentLoaded', function() {
  var menuLinks = document.querySelectorAll('.menu .nav__list-item-link');
  var nav = document.querySelector('.header');

  function updateActiveLink() {
    var currentUrl = window.location.href;
    var currentAnchor = window.location.hash;

    menuLinks.forEach(function(link) {
      var linkUrl = link.href;

      if (currentUrl === linkUrl || (currentUrl + '#') === linkUrl) {
        link.parentNode.classList.add('is-active');

        if (currentAnchor && link.hash === currentAnchor) {
          nav.classList.add('is-active-anchor');
        } else {
          nav.classList.remove('is-active-anchor');
        }
      } else {
        link.parentNode.classList.remove('is-active');
      }
    });
  }

  // Обработчик клика на пункты меню
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      // Проверяем, является ли ссылка якорной ссылкой
      if (this.getAttribute('href').startsWith('#')) {
        // Отменяем стандартное действие перехода по ссылке
        event.preventDefault();

        // Получаем целевой элемент по идентификатору из хэша ссылки
        var targetId = this.getAttribute('href').substring(1);
        var target = document.getElementById(targetId);

        // Проверяем, существует ли целевой элемент
        if (target) {
          // Вычисляем позицию элемента с учетом высоты фиксированного меню
          var offset = target.offsetTop - document.querySelector('.nav').offsetHeight;

          // Плавно прокручиваем до целевого элемента с использованием smooth-scrolling
          window.scrollTo({
            top: offset,
            behavior: 'smooth'
          });

          // Закрываем мобильное меню
          var menu = document.querySelector('.menu');
          menu.classList.remove('active-menu');
          document.querySelector('.menu-black').src = 'assets/img/x.png';

          // Удаляем класс is-active с пункта меню
          var activeMenuItem = document.querySelector('.menu .is-active');
          if (activeMenuItem) {
            activeMenuItem.classList.remove('is-active');
          }

          // Добавляем класс is-active к текущему пункту меню
          this.parentElement.classList.add('is-active');
        }
      }
    });
  });

  // Обработчик клика на кнопку мобильного меню
  var menuToggle = document.querySelector('.header-menu');
  menuToggle.addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active-menu');

    // Изменяем иконку меню
    var menuImage = document.querySelector('.menu-black');
    var menuImageSrc = menuImage.src;

    if (menu.classList.contains('active-menu')) {
      menuImage.src = 'assets/img/x.png';
    } else {
      menuImage.src = 'assets/img/menu.png';
    }
  });

  // Проверяем активную ссылку при загрузке страницы
  updateActiveLink();

  // Проверяем активную ссылку при событии hashchange
  window.addEventListener('hashchange', updateActiveLink);
});

















//======================================================








//header

// $(function() {
//   let header = $('.header');
//   let headerHeight = header.outerHeight(); // Use outerHeight() to include padding, border, and margin

//   $(window).scroll(function() {
//     if($(this).scrollTop() > 1) {
//      header.addClass('scrolled');
//      $('body').css({
//         'paddingTop': headerHeight + 'px'
//      });
//     } else {
//      header.removeClass('scrolled');
//      $('body').css({
//       'paddingTop': 0
//      })
//     }
//   });
// });



//misc welosiped calls
$('.button--primary, .sec-price__item').not('.pay-btn, .form-btn, ._ptev_none').on('click', function(e) {
  e.preventDefault();
  $('a.EWBookingWidgetTrigger')[0].click();
});
$('.nav__list-item-link').on('click', function(e) {
  setTimeout(function() {
      $('.header__burger').click();
  }, 300);
});
$('#goroshenko').on('click', function(e) {
  window.location.href = 'https://widget.easyweek.io/goroshenko/team/22373/19252';
});
$('#peters').on('click', function(e) {
  window.location.href = 'https://widget.easyweek.io/goroshenko/team/22373/23049';
});
$('#moroz').on('click', function(e) {
  window.location.href = 'https://widget.easyweek.io/goroshenko/team/22373/24641';
});
$('#shayahmetova').on('click', function(e) {
  window.location.href = 'https://widget.easyweek.io/goroshenko/team/22373/28116';
});
$('#sherbiy').on('click', function(e) {
  window.location.href = 'https://widget.easyweek.io/goroshenko/team/22373/30291';
});
// calculate min-height on init
$('.header__mob-bottom').css('min-height', `${window.innerHeight}px`);

// recalculate the min-height everytime the bar appears or disappears
$(window).resize(() => {
  $('.header__mob-bottom').css('min-height', `${window.innerHeight}px`);
});



$(document).ready(function () {
  $("form").not('.feedback-form').submit(function () {
      $.ajax({
          type: "POST",
          url: "teleg.php",
          data: $(this).serialize()
      }).done(function () {
          $(this).find("input,textarea").val("");
          //alert("Форма успішно відправлена!");
          $('form').trigger("reset");
          window.location.href = 'https://goroshenko.com.ua/thanks';
      });
      return false;

  });
  $(".feedback-form").submit(function () {

      $.ajax({
          type: "POST",
          url: "teleg_2.php",
          data: $(this).serialize()
      }).done(function () {

          $('.feedback-form').find("input,textarea").val("");
          $('.feedback-form').fadeOut('fast');
          $('.form-success').fadeIn('fast');
      });
      return false;
  });
});