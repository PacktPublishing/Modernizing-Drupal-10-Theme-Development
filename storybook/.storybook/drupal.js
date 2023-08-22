let Drupal = { behaviors: {}, locale: {} };

Drupal.attachBehaviors = function (context, settings) {
  context = context || document;
  settings = settings || drupalSettings;
  const behaviors = Drupal.behaviors;
  // Execute all of them.
  Object.keys(behaviors || {}).forEach((i) => {
    if (typeof behaviors[i].attach === 'function') {
      // Don't stop the execution of behaviors in case of an error.
      try {
        behaviors[i].attach(context, settings);
      } catch (e) {
        Drupal.throwError(e);
      }
    }
  });
};

Drupal.throwError = function (error) {
  setTimeout(() => {
    throw error;
  }, 0);
};

module.exports = Drupal;
