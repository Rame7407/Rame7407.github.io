const hamburger = document.querySelector('.promo__hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__block-close');

hamburger.addEventListener('click', () => {
    menu.classList.add('menu_active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('menu_active');
});
//lvl
const counters = document.querySelectorAll('.lvl__column-percent'),
      lines = document.querySelectorAll('.lvl__column-dash span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});


//validate
$(document).ready(function(){
    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                message:{
                    minlength:10
                },
                checkbox: "required"
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
                },
                message: {
                    minlength: jQuery.validator.format("Введите {0} символов!")
                },
                checkbox:"Пожалуйста подтвердите о том что вы уведомлены о ПК"
            }
        });
    };

    validateForms('#form');
});