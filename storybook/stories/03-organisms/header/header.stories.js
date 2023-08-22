import DrupalAttribute from 'drupal-attribute';
import Header from './header.html.twig';
import * as Logo from '../../01-atoms/logo/logo.stories';
import * as Menu from '../../02-molecules/menu/menu.stories';
import * as MenuItem from '../../01-atoms/menu-item/menu-item.stories';
import * as Block from '../../02-molecules/block/block.stories';

export default {
  title: 'Design System/Organisms/Header',
  args: {
    blocks: [
      Logo.Default({
        ...Logo.default.args,
      }),
      Block.BlockMenu({
        content: [
          Menu.Main({
            ...Menu.default.args,
          }),
        ],
      }),
      Menu.Default({
        items: [
          MenuItem.Secondary({
            title: 'My account',
            url: 'https://www.alps-trips.com/user',
          }),
          MenuItem.Secondary({
            title: 'Log out',
            url: 'https://www.alps-trips.com/user',
          }),
        ].join(''),
      }),
    ].join(''),
    background: true,
  },
};

export const Default = ({ blocks, background }) =>
  Header({
    blocks,
    background,
    attributes: new DrupalAttribute(),
  });
