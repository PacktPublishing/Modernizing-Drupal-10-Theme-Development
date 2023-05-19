(function ($) {
  Drupal.behaviors.alps_weather = {
    attach: function (context, settings) {
      $(once('forecast-element', '.forecast-element__date', context)).on(
        'click',
          () =>  {
            alert(settings.alps_weather.message);
          }
        );
      }
  };
}(jQuery));
