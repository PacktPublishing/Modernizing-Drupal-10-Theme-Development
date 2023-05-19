import Breadcrumb from './breadcrumb.html.twig';

export default {
  title: 'Design System/Atoms/Breadcrumb',
  args: {
    breadcrumb: [
      {
        url: '#',
        text: 'Home',
      },
      {
        url: '#',
        text: 'Trips',
      },
      {
        text: 'Monviso tour',
      },
    ],
  },
};

export const Default = ({ breadcrumb }) =>
  Breadcrumb({
    breadcrumb,
  });
