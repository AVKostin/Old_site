
 const slideItems = document.querySelectorAll('.sec-rev__item, specialists__kit');

// Инициализация слайдера с помощью Swiper.js
const swiper = new Swiper('.swiper-container, .specialists__wrapp', {
  slidesPerView: 'auto', // Автоматическое количество слайдов в зависимости от ширины контейнера
  centeredSlides: true, // Слайды центрируются в контейнере
  spaceBetween: 10, // Расстояние между слайдами
  pagination: {
    el: '.sec-rev-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<button class="' + className + '"></button>';
    },
  },
  autoplay: {
    delay: 5000, // Интервал смены слайда в миллисекундах (5 секунд)
    disableOnInteraction: false, // Позволяет автоматической смене слайда при взаимодействии пользователя с слайдером
  },
  breakpoints: {
    480: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 25
    },
    1279: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  },
  on: {
    slideChange: function () {
      const activeIndex = this.realIndex;
      slideItems.forEach((item, index) => {
        item.classList.toggle('active', index === activeIndex);
      });
    },
  },
});
