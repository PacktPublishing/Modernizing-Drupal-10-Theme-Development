// eslint-disable-next-line func-names
(function (Drupal) {
  Drupal.behaviors.toggleMenu = {
    attach() {
      const openBtn = document.querySelector('.toggle-menu-open');
      const closeBtn = document.querySelector('.toggle-menu-close');
      const toggleMenu = document.querySelector('.toggle-menu-menu');

      // eslint-disable-next-line func-names
      openBtn.addEventListener('click', function () {
        toggleMenu.classList.remove('translate-x-full');
      });
      // eslint-disable-next-line func-names
      closeBtn.addEventListener('click', function () {
        toggleMenu.classList.add('translate-x-full');
      });
    },
  };
  // eslint-disable-next-line no-undef
})(Drupal);
