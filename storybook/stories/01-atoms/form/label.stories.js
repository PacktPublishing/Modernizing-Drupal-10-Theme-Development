import DrupalAttribute from 'drupal-attribute';
import Label from './label.html.twig';

const drupalAttributes = new DrupalAttribute();
drupalAttributes.setAttribute('for', 'element-name');

export default {
  title: 'Design System/Atoms/Form/Label',
  args: {
    attributes: drupalAttributes,
    title: 'Name',
  },
  decorators: [(story) => `<div class="w-1/4">${story()}</div>`],
};
export const Default = ({ attributes, title }) =>
  Label({
    attributes,
    title,
  });
