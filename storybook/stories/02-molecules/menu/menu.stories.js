import Menu from './menu.html.twig';
import MenuVertical from './menu-vertical.html.twig';
import MenuMain from './menu-main.html.twig';
import * as MenuItem from '../../01-atoms/menu-item/menu-item.stories';

export default {
  title: 'Design System/Molecules/Menu',
  args: {
    items: [
      MenuItem.Default({
        title: 'Home',
        url: 'https://www.alps-trips.com/',
      }),
      MenuItem.Default({
        title: 'Trips',
        url: 'https://www.alps-trips.com/trips',
      }),
      MenuItem.Default({
        title: 'Contact',
        url: 'https://www.alps-trips.com/contact',
      }),
    ].join(''),
  },
};

export const Default = ({ items }) =>
  Menu({
    items,
  });

export const Vertical = ({ items }) =>
  MenuVertical({
    items,
  });

export const Main = ({ items }) =>
  MenuMain({
    items,
  });
