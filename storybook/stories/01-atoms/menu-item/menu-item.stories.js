import MenuItem from './menu-item.html.twig';
import MenuItemSecondary from './menu-item-secondary.html.twig';
import MenuItemVertical from './menu-item-vertical.html.twig';

export default {
  title: 'Design System/Atoms/Menu Item',
  args: {
    title: 'Home',
    url: 'https://www.alps-trips.com/',
    active: false,
  },
  decorators: [(story) => `<ul class="flex">${story()}</ul>`],
};

export const Default = ({ title, url, active }) =>
  MenuItem({
    title,
    url,
    active,
  });
export const Secondary = ({ title, url, active }) =>
  MenuItemSecondary({
    title,
    url,
    active,
  });
export const Vertical = ({ title, url, active }) =>
  MenuItemVertical({
    title,
    url,
    active,
  });
