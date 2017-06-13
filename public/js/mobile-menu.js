import $ from 'jquery';

export function initMobileMenu() {

  // $('.js-toggleMobileMenu').click(function(e) {
  //   e.preventDefault();

  //   const mobileMenu = $('.js-mobileMenuContainer');
  //   mobileMenu.toggleClass("js-l-mobile");
  // })


  $('.js-toggleMobileMenu').click(function(e) {
    e.preventDefault();

    const mobileMenu = $('.js-mobileMenuContainer');

    console.log('mobileMenu 2', mobileMenu);

    mobileMenu.toggleClass("js-l-mobile");
  })

  // const menuWrapper = document.querySelector('.js-menuWrapper');

}

