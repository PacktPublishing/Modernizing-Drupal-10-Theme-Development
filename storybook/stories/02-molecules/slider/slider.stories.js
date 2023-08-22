import Slider from './slider.html.twig';
import * as Slide from '../../01-atoms/slide/slide.stories';
import injectSwiper from '../../utils/inject-swiper';

export default {
  title: 'Design System/Molecules/Slider',
  args: {
    slides: [
      Slide.Default({
        ...Slide.default.args,
      }),
      Slide.Default({
        ...Slide.default.args,
      }),
      Slide.Default({
        ...Slide.default.args,
      }),
    ].join(''),
  },
  decorators: [(story) => injectSwiper(story)],
};

export const Default = ({ slides }) =>
  Slider({
    slides,
  });
