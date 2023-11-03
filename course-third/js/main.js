const slider = tns({
container: '.carousel__slider',
items: 1,
slideBy: 'page',
autoplay: false,
nav: false,
controls: false
});

document.querySelector('.carousel__btn-left').addEventListener('click', function()  {
    slider.goTo('prev');
});

document.querySelector('.carousel__btn-right').addEventListener('click', function()  {
    slider.goTo('next');
});

$(document).ready(function(){
    $('ul.catalog__menu').on('click', 'li:not(.catalog__menu-item_active)', function() {
        $(this)
          .addClass('catalog__menu-item_active').siblings().removeClass('catalog__menu-item_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog__content-info').eq(i).toggleClass('catalog__content-info_active');
                $('.catalog__content-descr').eq(i).toggleClass('catalog__content-descr_active');
            });
        });
    }

    toggleSlide('.catalog__content-link');
    toggleSlide('.catalog__content-back');

    //Modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_catalog').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__text').text($('.catalog__content-header').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        })
    });

    //validate
    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#consult-form');
    validateForms('#consultation form');
    validateForms('#order form');

    //mask
    $('input[name=phone]').mask("+7 (999) 999-99-99");
});