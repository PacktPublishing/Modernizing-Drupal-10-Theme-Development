import DrupalAttribute from 'drupal-attribute';
import Container from './container.html.twig';
import * as Button from '../../01-atoms/form/button.stories';

const drupalAttributes = new DrupalAttribute();

export default {
  title: 'Design System/Molecules/Form/Container',
  args: {
    attributes: drupalAttributes,
    children: Button.Default({
      ...Button.default.args,
    }),
  },
  decorators: [(story) => `<div class="w-1/4">${story()}</div>`],
};

export const Default = ({ attributes, children }) =>
  Container({
    attributes,
    children,
  });
