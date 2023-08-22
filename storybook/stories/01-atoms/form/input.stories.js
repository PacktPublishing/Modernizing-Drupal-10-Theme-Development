import DrupalAttribute from 'drupal-attribute';
import Input from './input.html.twig';

const drupalAttributes = new DrupalAttribute();
drupalAttributes.setAttribute('id', 'element-name');

export default {
  title: 'Design System/Atoms/Form/Input',
  args: {
    attributes: drupalAttributes,
    children: '',
    small: false,
  },
  decorators: [(story) => `<div class="w-1/4">${story()}</div>`],
};
export const Default = ({ attributes, children, small }) =>
  Input({
    attributes,
    children,
    small,
  });
