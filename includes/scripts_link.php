    <script src="assets/js/jquery-3.6.4.min.js"></script>
    <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
    <script async src="assets/js/slick.min.js"></script>
    <script async src="assets/js/jquery.validate.min.js"></script>
    <script async src="assets/js/main.js"></script>
    <script async src="assets/js/to-top.js"></script>
    <script async src="assets/js/nav.js"></script>
    <script async src="assets/js/slider.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script>
    <script src="https://widget.easyweek.io/widget.js"></script>
    <script>var ewWidget = new EasyWeekWidget({url: 'https://widget.easyweek.io/goroshenko', button: { text: 'Онлайн-запис', showText: true, color: '#ffffff', background: '#f79781', textColor: '#383868', textBackground: '#ffffff' }})
    </script>
<script >
    function updatePage() {

      let curWidth = $(window).width();

      $(window).resize(function () {
        if ($(window).width() <= 991 && curWidth > 991) {

          location.reload();
        }
        else if ($(window).width() > 991 && curWidth <= 991) {

          location.reload();
        }
      });
    }
    if ($('#home').length === 1) {
      updatePage();
    }

    function sliderSpec() {
      var swiper1 = new Swiper(".sliderSpec", {
        slidesPerView: "auto",
        spaceBetween: 20,
        preloadImages: false,
      });
    }
    if ($('#home').length === 1) {
      if ($(window).width() < 1280) {
        sliderSpec();
      }
    }
    function sliderPrice() {
      var swiper2 = new Swiper(".sliderPrice", {
        slidesPerView: 3,
        spaceBetween: 60,
        pagination: {
          el: '.price-pagination',
          clickable: true,
        },
        breakpoints: {
          /* when window width is >= 320px */
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          /* when window width is >= 480px */
          700: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          /* when window width is >= 640px */
          1279: {
            slidesPerView: 3,
            spaceBetween: 20
          }
        }
      });
    }
    function sliderSpec() {
      var swiper2 = new Swiper(".sliderSpec", {
        slidesPerView: 3,
        spaceBetween: 60,
        pagination: {
          el: '.spec-pagination',
          clickable: true,
        },
        breakpoints: {
          /* when window width is >= 320px */
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          /* when window width is >= 480px */
          700: {
            slidesPerView: 2.5,
            spaceBetween: 20
          },
          /* when window width is >= 640px */
          1279: {
            slidesPerView: 3.5,
            spaceBetween: 20
          }
        }
      });
    }
    if ($('#home').length === 1) {
      sliderPrice();
      sliderSpec();
    }

    // function sliderRev() {
    //   var swiper3 = new Swiper(".sliderRev", {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //     loop: true,
    //     centeredSlides: true,
    //     preloadImages: false,
    //     pagination: {
    //       el: '.sec-rev-pagination',
    //       clickable: true,
    //     },
    //     breakpoints: {
    //       /* when window width is >= 320px */
    //       320: {
    //         slidesPerView: 1,
    //         spaceBetween: 20
    //       },
    //       /* when window width is >= 480px */
    //       700: {
    //         slidesPerView: 2,
    //         spaceBetween: 20
    //       },
    //       /* when window width is >= 640px */
    //       1279: {
    //         slidesPerView: 3,
    //         spaceBetween: 100
    //       }
    //     }
    //   });
    // }
    if ($('#home').length === 1) {
      sliderRev();
    }

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