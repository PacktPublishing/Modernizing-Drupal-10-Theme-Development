// eslint-disable-next-line func-names
(function (Drupal, once) {
  Drupal.behaviors.at_button = {
    attach(context) {
      const [button] = once('at-button', '.at-button', context);
      if (button) {
        button.addEventListener('click', function (event) {
          event.preventDefault();
          alert('Hello World!');
        });
      }
    },
  };
  // eslint-disable-next-line no-undef
})(Drupal, once);
