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


    // ---- settings ackordion ---- //
    function settingsAckordion() {
        $('.we-serv__item:first-child').css({ 'pointer-events': 'none' });
        $('.we-serv__item').on('click', function () {
            let timeAnim = 250;
            $('.we-serv__head').removeClass('active').next().slideUp(timeAnim);
            $(this).find('.we-serv__head').toggleClass('active').next().slideToggle(timeAnim);
            $('.we-serv__item').css({ 'pointer-events': 'auto' });
            $(this).css({ 'pointer-events': 'none' });
        });
    }
    if ($('#home').length === 1) {
        settingsAckordion();
    }

  

    // ---- settings popup-rev ---- //
    // $(document).ready(function () {
    //     setTimeout(function () {
    //         $('.sec-rev__item').click(function () {
    //             let imgLink = $(this).attr('data-img');
    //             $('.popup-rev img').attr('src', imgLink);
    //             $('.popup-rev').fadeIn();
    //         });
    //     }, 1500);
    // });

    // $('.popup-rev').click(function () {
    //     $(this).fadeOut();
    // });


    // ---- menu fixed active ---- //
    $(window).scroll(function () {
        let scrollDock = $(document).scrollTop();

        if (scrollDock > 1) {
            $('header').addClass("active");
        } else {
            $('header').removeClass("active");
        }
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
               // $('.EWBookingWidgetTrigger').css('opacity','1');
            } else {
                $('.up').fadeOut();
                //$('.EWBookingWidgetTrigger').css('opacity','0');
            }
        });
    }
    buttonUp();
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
            window.location.href = 'https://G-o-r-o-s-henko.com.ua/thanks';
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

//misc welosiped calls
$('.specialist__item-button, .button--primary, .sec-price__item, .specialist__item').not('.pay-btn, .form-btn, ._ptev_none').on('click', function(e) {
    //e.preventDefault();
    //$('a.EWBookingWidgetTrigger')[0].click();
    $('.popup-form').addClass('active');
    $('body').css('overflow', 'hidden');
    $('form.popup-form__form input[name="fname"]').val('Форма з поп-папу по кнопці '+$(this).html());
  });
$('.nav__list-item-link').on('click', function(e) {   
    setTimeout(function() { 
        $('.header__burger').click();
    }, 300);     
});

// calculate min-height on init
$('.header__mob-bottom').css('min-height', `${window.innerHeight}px`);

// recalculate the min-height everytime the bar appears or disappears
$(window).resize(() => {
    $('.header__mob-bottom').css('min-height', `${window.innerHeight}px`);
});

