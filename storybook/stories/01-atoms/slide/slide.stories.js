import DrupalAttribute from 'drupal-attribute';
import Slide from './slide.html.twig';
import * as Picture from '../picture/picture.stories';

const drupalAttributes = new DrupalAttribute();
drupalAttributes
  .setAttribute('src', '/images/monviso_from_turin.jpg')
  .setAttribute('alt', 'Monviso as seen from Turin')
  .addClass(['block', 'w-full']);

export default {
  title: 'Design System/Atoms/Slide',
  args: {
    picture: Picture.Default({
      attributes: drupalAttributes,
    }),
    title: 'Slide title',
    description: 'Slide description',
  },
};

export const Default = ({ picture, title, description }) =>
  Slide({
    picture,
    title,
    description,
  });
