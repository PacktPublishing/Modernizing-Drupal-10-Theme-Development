import DrupalAttribute from 'drupal-attribute';
import Textarea from './textarea.html.twig';

const drupalAttributes = new DrupalAttribute();
const drupalWrapperAttributes = new DrupalAttribute();

export default {
  title: 'Design System/Atoms/Form/Textarea',
  args: {
    attributes: drupalAttributes,
    wrapperAttributes: drupalWrapperAttributes,
    value: '',
  },
  decorators: [(story) => `<div class="w-1/4">${story()}</div>`],
};
export const Default = ({ attributes, wrapperAttributes, value }) =>
  Textarea({
    attributes,
    wrapperAttributes,
    value,
  });
