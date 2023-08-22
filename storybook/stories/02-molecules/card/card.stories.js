import Card from './card.html.twig';
import * as Picture from '../../01-atoms/picture/picture.stories';

export default {
  title: 'Design System/Molecules/Card',
  args: {
    title: 'Title',
    description:
      'Nisi eiusmod labore excepteur aliqua deserunt incididunt est laboris magna pariatur reprehenderit dolore est.',
    image: Picture.Default({
      ...Picture.default.args,
    }),
  },
  decorators: [(story) => `<div class="w-1/4">${story()}</div>`],
};

export const Default = ({ title, description, image }) =>
  Card({
    title,
    description,
    image,
  });
