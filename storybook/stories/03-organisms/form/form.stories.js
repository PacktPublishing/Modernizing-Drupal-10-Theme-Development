import DrupalAttribute from 'drupal-attribute';
import Form from './form.html.twig';

const drupalAttributes = new DrupalAttribute();

export default {
  title: 'Design System/Organisms/Form/Form container',
  args: {
    attributes: drupalAttributes,
    children: 'Form content',
    centered: false,
  },
};

export const Default = ({ attributes, children, centered }) =>
  Form({
    attributes,
    children,
    centered,
  });
