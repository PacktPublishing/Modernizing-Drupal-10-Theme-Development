import LevelPage from './template5.html.twig';
import * as View from '../../03-organisms/view/view.stories';
import * as Level from '../../03-organisms/level/level.stories';

export default {
  title: 'Design System/Templates/Template5',
  args: {
    content: [
      View.Default({
        ...View.default.args,
        header: Level.Default({
          ...Level.default.args,
        }),
      }),
    ].join(''),
  },
};

export const Default = ({ content }) =>
  LevelPage({
    content,
  });
