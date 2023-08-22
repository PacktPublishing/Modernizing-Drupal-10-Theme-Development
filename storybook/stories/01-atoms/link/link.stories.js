import Link from './link.html.twig';

export default {
  title: 'Design System/Atoms/Link',
  args: {
    url: 'https://www.example.com',
    title: 'Link',
  },
};

export const Default = ({ url, title }) =>
  Link({
    url,
    title,
  });
