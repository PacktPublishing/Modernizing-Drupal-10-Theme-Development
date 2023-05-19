import Promotion from './promotion.html.twig';

export default {
  title: 'Design System/Atoms/Promotion',
  args: {
    title: 'Summer offer',
    url: 'https://www.example.com',
    oldPrice: '€2000.00',
    newPrice: '€999.00',
  },
};

export const Default = ({ title, oldPrice, newPrice }) =>
  Promotion({
    title,
    oldPrice,
    newPrice,
  });
