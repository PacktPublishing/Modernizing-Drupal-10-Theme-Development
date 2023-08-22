// eslint-disable-next-line func-names
((Drupal, once) => {
  Drupal.behaviors.at_button = {
    attach(context) {
      once('at-button', '.at-button', context).forEach((item) => {
        // eslint-disable-next-line func-names
        item.addEventListener('click', (event) => {
          event.preventDefault();
          alert('Hello World!');
        });
      });
    },
  };
})(Drupal, once);
