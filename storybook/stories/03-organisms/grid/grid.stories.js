import Grid2 from './grid2.html.twig';
import Grid3 from './grid3.html.twig';
import * as Card from '../../02-molecules/card/card.stories';
import * as Picture from '../../01-atoms/picture/picture.stories';

export default {
  title: 'Design System/Organisms/Grid',
  args: {
    content: [
      Card.Default({
        title: 'Popular trips',
        description: 'Veniam labore aliqua nisi aliquip dolore.',
        image: Picture.Default({
          ...Picture.default.args,
        }),
      }),
      Card.Default({
        title: 'Top route',
        description:
          'Sint quis deserunt laborum velit amet tempor ipsum exercitation.',
        image: Picture.Default({
          ...Picture.default.args,
        }),
      }),
      Card.Default({
        title: 'Online booking',
        description:
          'Lorem excepteur elit enim fugiat pariatur esse nulla do est eu officia nulla sint adipisicing.',
        image: Picture.Default({
          ...Picture.default.args,
        }),
      }),
    ].join(''),
  },
};

export const Two = ({ content }) =>
  Grid2({
    content,
  });
export const Three = ({ content }) =>
  Grid3({
    content,
  });
