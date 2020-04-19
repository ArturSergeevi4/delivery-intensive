const cartButton = document.querySelector('#cart-button')
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.close')

cartButton.addEventListener('click', toggleModal)
closeButton.addEventListener('click', toggleModal)

function toggleModal() {
	modal.classList.toggle('is-open')
}

$(function() {
  menu_top = $('.header').offset().top;        // запоминаем положение меню
  $(window).scroll(function () {             // отслеживаем событие прокрутки страницы
    if ($(window).scrollTop() > menu_top) {  // если прокрутка дошла до меню
      if ($('.header').css('position') != 'fixed') {  // проверяем, если меню еще не зафиксировано
        $('.header').css('position','fixed');  // задаем блоку меню свойство position = fixed
        $('.header').css('top','0');           // положение в самом верху
        $('.main').css('margin-top','80px'); // делаем отступ, чтобы контент не "скакал" в момент фиксации меню
      }
    } else {                                 // прокрутка страницы обратно вверх достигла место "перехода" меню
      if ($('.header').css('position') == 'fixed') {  // если меню зафиксировано
        $('.header').css('position','');
        $('.header').css('top','');
        $('.main').css('margin-top','');
      }
    }
  });
});

new WOW().init()
