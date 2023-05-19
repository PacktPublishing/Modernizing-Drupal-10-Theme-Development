import DrupalAttribute from 'drupal-attribute';
import Element from './element.html.twig';
import * as Label from '../../01-atoms/form/label.stories';
import * as Input from '../../01-atoms/form/input.stories';

const drupalAttributes = new DrupalAttribute();
const drupalDescriptionAttributes = new DrupalAttribute();

export default {
  title: 'Design System/Molecules/Form/Element',
  args: {
    attributes: drupalAttributes,
    prefix: '',
    descriptionDisplay: 'after',
    description: {
      content: 'This is a description',
      attributes: drupalDescriptionAttributes,
    },
    children: Input.Default({
      ...Input.default.args,
    }),
    suffix: '',
    labelDisplay: 'before',
    label: Label.Default({
      ...Label.default.args,
    }),
    errors: '',
  },
  decorators: [(story) => `<div class="w-1/4">${story()}</div>`],
};

export const Default = ({
  attributes,
  prefix,
  descriptionDisplay,
  description,
  children,
  suffix,
  labelDisplay,
  label,
  errors,
}) =>
  Element({
    attributes,
    prefix,
    descriptionDisplay,
    description,
    children,
    suffix,
    labelDisplay,
    label,
    errors,
  });
