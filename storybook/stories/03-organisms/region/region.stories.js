import DrupalAttribute from 'drupal-attribute';
import Region from './region.html.twig';
import * as Block from '../../02-molecules/block/block.stories';

export default {
  title: 'Design System/Organisms/Region',
  args: {
    content: [
      Block.Default({
        ...Block.default.args,
      }),
      Block.Default({
        ...Block.default.args,
      }),
    ].join(''),
    attributes: new DrupalAttribute(),
  },
};

export const Default = ({ content, attributes }) =>
  Region({
    content,
    attributes,
  });
