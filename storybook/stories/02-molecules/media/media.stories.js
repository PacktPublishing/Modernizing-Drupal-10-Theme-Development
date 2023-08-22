import DrupalAttribute from 'drupal-attribute';
import Media from './media.html.twig';
import * as Details from '../../01-atoms/details/details.stories';
import * as Picture from '../../01-atoms/picture/picture.stories';

const drupalAttributes = new DrupalAttribute();
drupalAttributes
  .setAttribute('src', '/images/tre_cime_di_lavaredo.jpg')
  .setAttribute('alt', 'Monviso as seen from Turin');

export default {
  title: 'Design System/Molecules/Media',
  args: {
    picture: Picture.Default({
      attributes: drupalAttributes,
    }),
    title: 'Title',
    body: 'Ullamco sunt esse laborum ad aliqua sit eu excepteur laboris cillum laboris dolore commodo esse.',
    details: Details.Default({
      ...Details.default.args,
    }),
    url: '#',
  },
};

const Template = ({ picture, title, body, details, url }) =>
  Media({
    picture,
    title,
    body,
    details,
    url,
  });

export const Default = Template.bind({});
