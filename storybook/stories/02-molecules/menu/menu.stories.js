import Menu from './menu.html.twig';
import MenuVertical from './menu-vertical.html.twig';
import MenuMain from './menu-main.html.twig';
import MenuToggle from './menu-toggle.html.twig';
import * as MenuItem from '../../01-atoms/menu-item/menu-item.stories';
import './menu-toggle';

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
    icon: 'M406.5 399.6c-19.1-46.7-65-79.6-118.5-79.6h-64c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256c0-114.9 93.1-208 208-208s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7c-32 20.1-69.8 31.7-110.4 31.7s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0-176 0z',
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

export const Toggle = () =>
  MenuToggle({
    items: [
      MenuItem.Secondary({
        title: 'My Account',
        url: 'https://www.alps-trips.com/',
      }),
      MenuItem.Secondary({
        title: 'Log out',
        url: 'https://www.alps-trips.com/trips',
      }),
    ].join(''),
    icon: 'M406.5 399.6c-19.1-46.7-65-79.6-118.5-79.6h-64c-53.5 0-99.4 32.9-118.5 79.6C69.9 362.2 48 311.7 48 256c0-114.9 93.1-208 208-208s208 93.1 208 208c0 55.7-21.9 106.2-57.5 143.6zm-40.1 32.7c-32 20.1-69.8 31.7-110.4 31.7s-78.4-11.6-110.5-31.7c7.3-36.7 39.7-64.3 78.5-64.3h64c38.8 0 71.2 27.6 78.5 64.3zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-272a40 40 0 1 1 0-80 40 40 0 1 1 0 80zm-88-40a88 88 0 1 0 176 0 88 88 0 1 0-176 0z',
  });

export const Main = ({ items }) =>
  MenuMain({
    items,
  });
