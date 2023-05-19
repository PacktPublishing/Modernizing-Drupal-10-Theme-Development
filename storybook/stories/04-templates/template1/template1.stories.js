import Home from './template1.html.twig';
import injectSwiper from '../../utils/inject-swiper';
import * as Content from '../../03-organisms/content/content.stories';

export default {
  title: 'Design System/Templates/Template1',
  args: {
    content: [
      Content.Default({
        ...Content.default.args,
      }),
    ].join(''),
  },
  decorators: [(story) => injectSwiper(story)],
};

export const Default = ({ content }) =>
  Home({
    content,
  });
