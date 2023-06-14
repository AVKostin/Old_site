// var currentUrl = window.location.href;

// // Получаем все ссылки в меню
// var menuLinks = document.querySelectorAll('.nav__list-item-link');

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



document.addEventListener('DOMContentLoaded', function() {
  var currentUrl = window.location.href;
  var menuLinks = document.querySelectorAll('.nav__list-item-link');

  menuLinks.forEach(function(link) {
    var linkUrl = link.href;

    if (currentUrl === linkUrl) {
      link.parentNode.classList.add('is-active');
    } else {
      link.parentNode.classList.remove('is-active');
    }
  });
});