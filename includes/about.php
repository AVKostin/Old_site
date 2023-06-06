<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
<!-- Подключение стилей Swiper.js -->

<section id="about" title="About Us Section">
  <div class="container">
    <div class="section__top">
      <h2 class="main-title main-title--upper" data-aos="fade-left">Відгуки</h2>
    </div>
    <div class="sliderRev" data-aos="fade-down">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="sec-rev__item" data-fancybox="gallery" data-src="assets/img/review1.jpg">
              <img src="assets/img/review1.jpg" alt="#" loading="lazy">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="sec-rev__item" data-fancybox="gallery" data-src="assets/img/review2.jpg">
              <img src="assets/img/review2.jpg" alt="#" loading="lazy">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="sec-rev__item" data-fancybox="gallery" data-src="assets/img/review3.jpg">
              <img src="assets/img/review3.jpg" alt="#" loading="lazy">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="sec-rev__item" data-fancybox="gallery" data-src="assets/img/review4.jpg">
              <img src="assets/img/review4.jpg" alt="#" loading="lazy">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="sec-rev__item" data-fancybox="gallery" data-src="assets/img/review5.jpg">
              <img src="assets/img/review5.jpg" alt="#" loading="lazy">
            </div>
          </div>
        </div>
        <div class="sec-rev-pagination"></div>
      </div>
    </div>
  </div>
</section>

<style>
  .sec-rev__item {
    transition: transform 0.5s ease-in-out;
  }

  .sec-rev__item.active {
    transform: scale(1.3);
  }
</style>

<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
<!-- Подключение скрипта Swiper.js -->

<script>
 const slideItems = document.querySelectorAll('.sec-rev__item');

// Инициализация слайдера с помощью Swiper.js
const swiper = new Swiper('.swiper-container', {
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
      spaceBetween: 2
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40
    },
    1279: {
      slidesPerView: 3,
      spaceBetween: 50
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

</script>











