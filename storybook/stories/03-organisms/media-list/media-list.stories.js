import MediaList from './media-list.html.twig';
import * as Media from '../../02-molecules/media/media.stories';

export default {
  title: 'Design System/Organisms/Media list',
  args: {
    title: 'Title',
    content: [
      Media.Default({
        title: 'Popular Hike',
        body: 'Veniam labore aliqua nisi aliquip dolore.',
        ...Media.default.args,
      }),
      Media.Default({
        title: 'Top route',
        body: 'Sint quis deserunt laborum velit amet tempor ipsum exercitation.',
        ...Media.default.args,
      }),
      Media.Default({
        title: 'Online booking',
        body: 'Lorem excepteur elit enim fugiat pariatur esse nulla do est eu officia nulla sint adipisicing.',
        ...Media.default.args,
      }),
      Media.Default({
        title: 'Popular Hike',
        body: 'Veniam labore aliqua nisi aliquip dolore.',
        ...Media.default.args,
      }),
      Media.Default({
        title: 'Top route',
        body: 'Sint quis deserunt laborum velit amet tempor ipsum exercitation.',
        ...Media.default.args,
      }),
      Media.Default({
        title: 'Online booking',
        body: 'Lorem excepteur elit enim fugiat pariatur esse nulla do est eu officia nulla sint adipisicing.',
        ...Media.default.args,
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
