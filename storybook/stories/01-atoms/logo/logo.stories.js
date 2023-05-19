import Logo from './logo.html.twig';

export default {
  title: 'Design System/Atoms/Logo',
  args: {
    url: '/logo.svg',
    alt: 'Alps Trips',
  },
};

export const Default = ({ url, alt }) =>
  Logo({
    url,
    alt,
  });
