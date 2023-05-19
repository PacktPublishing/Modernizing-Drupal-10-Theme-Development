import Level from './level.html.twig';
import * as Card from '../../02-molecules/card/card.stories';

export default {
  title: 'Design System/Organisms/Level',
  args: {
    text: 'An intermediate mountain trip typically involves hiking on trails that may have steep ascents and descents, as well as some rocky or uneven terrain. The trip may require some endurance and physical fitness, as you may be hiking for several hours at a time and gaining significant elevation. Additionally, intermediate mountain trips may require some basic technical skills, such as using trekking poles or navigating over small streams and rocky sections of the trail.',
    cards: [
      Card.Default({
        ...Card.default.args,
      }),
      Card.Default({
        ...Card.default.args,
      }),
      Card.Default({
        ...Card.default.args,
      }),
    ],
    background: true,
  },
};

export const Default = ({ text, cards }) =>
  Level({
    text,
    cards,
  });
