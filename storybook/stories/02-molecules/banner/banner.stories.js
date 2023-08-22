import Banner from './banner.html.twig';

export default {
  title: 'Design System/Molecules/Banner',
  args: {
    link: 'https://www.example.com',
    title: 'Lorem ipsum',
    image: '/images/ice_climber.png',
    cta: 'Click here',
  },
  decorators: [(story) => `<div class="w-1/4">${story()}</div>`],
};

export const Default = ({ link, title, image, cta }) =>
  Banner({
    link,
    title,
    image,
    cta,
  });
