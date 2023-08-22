import MediaList from './media-list.html.twig';
import * as Media from '../../02-molecules/media/media.stories';

export default {
  title: 'Design System/Organisms/Media list',
  args: {
    title: 'Title',
    content: [
      Media.Default({
        ...Media.default.args,
        title: 'Fabulous trip',
        body: 'Under the starlit skies, we danced through enchanted cities, lost in the magic of a fabulous journey.',
      }),
      Media.Default({
        ...Media.default.args,
        title: 'Best trip ever!',
        body: 'With each step, the world unfolded in breathtaking beauty, creating memories that will forever sparkle.',
      }),
      Media.Default({
        ...Media.default.args,
        title: 'Best trip ever!',
        body: 'With each step, the world unfolded in breathtaking beauty, creating memories that will forever sparkle.',
      }),
      Media.Default({
        ...Media.default.args,
        title: 'Fabulous trip',
        body: 'Under the starlit skies, we danced through enchanted cities, lost in the magic of a fabulous journey.',
      }),
      Media.Default({
        ...Media.default.args,
        title: 'Fabulous trip',
        body: 'Under the starlit skies, we danced through enchanted cities, lost in the magic of a fabulous journey.',
      }),
      Media.Default({
        ...Media.default.args,
        title: 'Best trip ever!',
        body: 'With each step, the world unfolded in breathtaking beauty, creating memories that will forever sparkle.',
      }),
    ].join(''),
  },
};

const Template = ({ title, content }) =>
  MediaList({
    title,
    content,
  });

export const Default = Template.bind({});
