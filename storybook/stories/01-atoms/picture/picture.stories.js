import DrupalAttribute from 'drupal-attribute';
import Picture from './picture.html.twig';

const drupalAttributes = new DrupalAttribute();
drupalAttributes
  .setAttribute('src', '/images/monviso_from_turin.jpg')
  .setAttribute('alt', 'Monviso as seen from Turin');

export default {
  title: 'Design System/Atoms/Picture',
  args: {
    attributes: drupalAttributes,
  },
};

export const Default = ({ url, title, attributes }) =>
  Picture({
    url,
    title,
    attributes,
  });
