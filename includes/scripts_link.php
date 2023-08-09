    <script src="assets/js/jquery-3.6.4.min.js"></script>
    <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
    <!-- <script async src="assets/js/slick.min.js"></script> -->
    <script async src="assets/js/jquery.validate.min.js"></script>
    <script async src="assets/js/main.js"></script>
    <!-- <script async src="assets/js/main_.js"></script> -->
    <!-- <script src="assets/js/menu.js"></script> -->
    <script async src="assets/js/to-top.js"></script>
    <script src="assets/js/nav.js"></script>
    <script async src="assets/js/slider.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script>
    <script src="https://widget.easyweek.io/widget.js"></script>
    <script>var ewWidget = new EasyWeekWidget({url: 'https://widget.easyweek.io/G-o-r-o-s-henko', button: { text: 'Онлайн-запис', showText: true, color: '#ffffff', background: '#f79781', textColor: '#383868', textBackground: '#ffffff' }})
    </script>

<script >

    let elements = document.getElementsByClassName('form-tel');
    for (let i = 0; i < elements.length; i++) {
      new IMask(elements[i], {
        mask: '+{38}(000)000-0000',
      });
    }

    Fancybox.bind('[data-fancybox="gallery"]', {
      Thumbs: {
        autoStart: false,
      },
      Toolbar: {
        display: [
          "zoom",
          "slideshow",
          "fullscreen",
          "close",
        ],
      },
    });
 </script>
 <!-- <script>
  document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.querySelector('.header-menu');
  var menu = document.querySelector('.menu');
  var menuLinks = menu.querySelectorAll('.nav__list-item-link');

  // Функция для закрытия меню
  function closeMenu() {
    menu.classList.remove('active-menu');
  }

  // Обработчик клика на пункты меню
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      // Закрытие меню после перехода по ссылке
      closeMenu();
    });
  });

  // Обработчик клика на кнопку мобильного меню
  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('active-menu');
  });
});
 </script> -->

 <!-- <script>
  document.addEventListener('DOMContentLoaded', function() {
    // Получаем все ссылки с якорями
    var anchorLinks = document.querySelectorAll('a[href^="#"]');

    // Обрабатываем клик на каждую ссылку
    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Отменяем стандартное поведение ссылки

        var targetId = link.getAttribute('href'); // Получаем ID целевого элемента
        var targetElement = document.querySelector(targetId); // Получаем целевой элемент по ID

        if (targetElement) {
          var targetOffsetTop = targetElement.offsetTop; // Получаем вертикальное смещение целевого элемента относительно верха страницы
          var headerHeight = document.querySelector('header').offsetHeight; // Получаем высоту заголовка, если он фиксированный

          // Вычисляем положение прокрутки, учитывая вертикальное смещение и высоту заголовка
          var scrollToPosition = targetOffsetTop - headerHeight;

          // Прокручиваем страницу к указанной позиции
          window.scrollTo({
            top: scrollToPosition,
            behavior: 'smooth' // Добавляем плавность прокрутки
          });
        }
      });
    });
  });


</script>

<script>
// Обработчик клика на пункты меню
var menuLinks = document.querySelectorAll('.menu .nav__list-item-link');
menuLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    // Проверяем, является ли ссылка якорной ссылкой
    if (this.getAttribute('href').startsWith('index.php#')) {
      // Отменяем стандартное действие перехода по ссылке
      event.preventDefault();

      // Получаем идентификатор целевого элемента из атрибута data-target
      var targetId = this.getAttribute('data-target');
      var target = document.getElementById(targetId);

      // Проверяем, существует ли целевой элемент
      if (target) {
        // Получаем URL текущей страницы
        var currentUrl = window.location.href;

        // Формируем новый URL с якорной ссылкой для главной страницы
        var newUrl = currentUrl.split('#')[0] + '#' + targetId;

        // Заменяем текущий URL на новый URL
        window.location.href = newUrl;
      }
    }
  });
});
</script> -->