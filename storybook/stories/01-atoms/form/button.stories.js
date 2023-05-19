import DrupalAttribute from 'drupal-attribute';
import Submit from './button.html.twig';

const drupalAttributes = new DrupalAttribute();

export default {
  title: 'Design System/Atoms/Form/Button',
  args: {
    attributes: drupalAttributes,
    label: 'Log in',
    type: 'submit',
    marginTop: false,
    fullWidth: false,
  },
};
export const Default = ({ attributes, label, type, marginTop, fullWidth }) =>
  Submit({
    attributes,
    label,
    type,
    marginTop,
    fullWidth,
  });
