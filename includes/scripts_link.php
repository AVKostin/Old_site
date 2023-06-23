    <script src="assets/js/jquery-3.6.4.min.js"></script>
    <script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
    <!-- <script async src="assets/js/slick.min.js"></script> -->
    <script async src="assets/js/jquery.validate.min.js"></script>
    <script async src="assets/js/main.js"></script>
    <!-- <script async src="assets/js/main_.js"></script> -->
    <script src="assets/js/menu.js"></script>
    <script async src="assets/js/to-top.js"></script>
    <script src="assets/js/nav.js"></script>
    <script async src="assets/js/slider.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script>
    <script src="https://widget.easyweek.io/widget.js"></script>
    <script>var ewWidget = new EasyWeekWidget({url: 'https://widget.easyweek.io/goroshenko', button: { text: 'Онлайн-запис', showText: true, color: '#ffffff', background: '#f79781', textColor: '#383868', textBackground: '#ffffff' }})
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