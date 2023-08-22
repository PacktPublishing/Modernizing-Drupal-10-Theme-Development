import DrupalAttribute from 'drupal-attribute';
import Content from './content.html.twig';
import * as Slider from '../../02-molecules/slider/slider.stories';
import * as Grid from '../grid/grid.stories';
import * as MediaList from '../media-list/media-list.stories';
import injectSwiper from '../../utils/inject-swiper';

export default {
  title: 'Design System/Organisms/Content',
  args: {
    content: [
      Slider.Default({
        ...Slider.default.args,
      }),
      Grid.Three({
        ...Grid.default.args,
      }),
      MediaList.Default({
        ...MediaList.default.args,
      }),
    ].join(''),
    attributes: new DrupalAttribute(),
  },
  decorators: [(story) => injectSwiper(story)],
};

export const Default = ({ content, attributes }) =>
  Content({
    content,
    attributes,
  });
