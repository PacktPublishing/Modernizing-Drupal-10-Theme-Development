import DrupalAttribute from 'drupal-attribute';
import Footer from './footer.html.twig';
import * as Social from '../../01-atoms/social/social.stories';
import * as MenuBlock from '../../02-molecules/menu-block/menu-block.stories';

export default {
  title: 'Design System/Organisms/Footer',
  args: {
    title: 'Title',
    copyright: '© 2023 All Rights Reserved.',
    menu: [
      MenuBlock.Default({
        ...MenuBlock.default.args,
      }),
      MenuBlock.Default({
        ...MenuBlock.default.args,
      }),
    ].join(''),
    social: [
      Social.Default({
        ...Social.default.args,
      }),
      Social.Default({
        ...Social.default.args,
      }),
      Social.Default({
        ...Social.default.args,
      }),
    ].join(''),
    attributes: new DrupalAttribute(),
  },
};

export const Default = ({ title, url, copyright, menu, social, attributes }) =>
  Footer({
    title,
    url,
    copyright,
    menu,
    social,
    attributes,
  });
