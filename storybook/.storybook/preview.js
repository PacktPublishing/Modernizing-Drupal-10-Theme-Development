import Drupal from './drupal';
import once from '@drupal/once';
import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';

window.once = once;
window.Drupal = Drupal;
window.drupalSettings = {};

twigDrupal(Twig);

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Documentation', 'Design System'],
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#FFFFFF',
        },
      ],
    },
  },
};
export default preview;
