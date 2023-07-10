// document.addEventListener('DOMContentLoaded', function() {
// var currentUrl = window.location.href;

// // Получаем все ссылки в меню
// var menuLinks = document.querySelectorAll('.nav__list-item');

// // Перебираем ссылки и проверяем совпадение с текущим URL
// menuLinks.forEach(function(link) {
//   var linkUrl = link.href;

//   // Если текущий URL содержит URL ссылки, добавляем класс is-active к родительскому элементу li
//   if (currentUrl === linkUrl) {
//     link.parentNode.classList.add('is-active');
//   } else {
//     link.parentNode.classList.remove('is-active');
//   }
// });
// });


// document.addEventListener('DOMContentLoaded', function() {
//   var currentUrl = window.location.href;
//   var menuLinks = document.querySelectorAll('.nav__list-item-link');

//   menuLinks.forEach(function(link) {
//     var linkUrl = link.href;

//     if (currentUrl === linkUrl) {
//       link.parentNode.classList.add('is-active');
//     } else {
//       link.parentNode.classList.remove('is-active');
//     }
//   });
// });


// document.addEventListener('DOMContentLoaded', function() {
//   var menuLinks = document.querySelectorAll('.nav__list-item-link');

//   function updateActiveLink() {
//     var currentUrl = window.location.href;
//     var currentAnchor = window.location.hash;

//     menuLinks.forEach(function(link) {
//       var linkUrl = link.href;

//       if (currentUrl === linkUrl || (currentUrl + '#') === linkUrl) {
//         link.parentNode.classList.add('is-active');
//       } else {
//         link.parentNode.classList.remove('is-active');
//       }

//       // Дополнительная проверка для якорных ссылок
//       if (currentAnchor && link.hash === currentAnchor) {
//         link.parentNode.classList.add('is-active');
//       }
//     });
//   }

//   // Проверяем активную ссылку при загрузке страницы
//   updateActiveLink();

//   // Проверяем активную ссылку при прокрутке страницы
//   window.addEventListener('scroll', updateActiveLink);
// });


// document.addEventListener('DOMContentLoaded', function() {
//   var menuLinks = document.querySelectorAll('.nav__list-item-link');
//   var nav = document.querySelector('.nav');

//   function updateActiveLink() {
//     var currentUrl = window.location.href;

//     menuLinks.forEach(function(link) {
//       var linkUrl = link.href;

//       if (currentUrl === linkUrl || (currentUrl + '#') === linkUrl) {
//         link.parentNode.classList.add('is-active');
//         nav.classList.add('is-active-anchor'); // Добавляем класс для отступа
//       } else {
//         link.parentNode.classList.remove('is-active');
//         nav.classList.remove('is-active-anchor'); // Удаляем класс для отступа
//       }
//     });
//   }

//   // Проверяем активную ссылку при загрузке страницы
//   updateActiveLink();

//   // Проверяем активную ссылку при прокрутке страницы
//   window.addEventListener('scroll', updateActiveLink);
// });



document.addEventListener('DOMContentLoaded', function() {
  var menuLinks = document.querySelectorAll('.nav__list-item-link');
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

  // Проверяем активную ссылку при загрузке страницы
  updateActiveLink();

  // Проверяем активную ссылку при событии hashchange
  window.addEventListener('hashchange', updateActiveLink);
});