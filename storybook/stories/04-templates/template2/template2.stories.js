import Home from './template2.html.twig';
import * as Trip from '../../03-organisms/trip/trip.stories';

export default {
  title: 'Design System/Templates/Template2',
  args: {
    content: [
      Trip.Full({
        ...Trip.default.args,
      }),
    ].join(''),
  },
};
export const Default = ({ content }) =>
  Home({
    content,
  });
