import MenuBlock from './menu-block.html.twig';
import * as Menu from '../menu/menu.stories';
import * as MenuItem from '../../01-atoms/menu-item/menu-item.stories';

export default {
  title: 'Design System/Molecules/Menu block',
  args: {
    title: 'Follow us',
    menu: Menu.Vertical({
      items: [
        MenuItem.Vertical({
          title: 'Contact',
          url: 'https://www.alps-trips.com/contact',
        }),
        MenuItem.Vertical({
          title: 'Github',
          url: 'https://www.github.com',
        }),
      ].join(''),
    }),
  },
};

export const Default = ({ title, menu }) =>
  MenuBlock({
    title,
    menu,
  });
