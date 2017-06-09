import $ from 'jquery';

export function initMobileMenu() {

console.log('initMobileMenu');

  $('.js-toggleMobileMenu').click(function(e) {
    e.preventDefault();

    const mobileMenu = $('.js-mobileMenuContainer');

    console.log('mobileMenu', mobileMenu);

    mobileMenu.add("js-l-mobile");
  })

  const menuWrapper = document.querySelector('.js-menuWrapper');

}

