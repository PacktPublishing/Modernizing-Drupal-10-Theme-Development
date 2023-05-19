// eslint-disable-next-line func-names
(function (Drupal) {
  Drupal.behaviors.menu = {
    attach() {
      const burgerOpen = document.querySelector('.navbar-open');
      const burgerClose = document.querySelector('.navbar-close');
      const menu = document.querySelector('.navbar-menu');

      burgerOpen.addEventListener('click', function () {
        menu.classList.remove('translate-x-full');
      });
      burgerClose.addEventListener('click', function () {
        menu.classList.add('translate-x-full');
      });
    },
  };
  // eslint-disable-next-line no-undef
})(Drupal);
