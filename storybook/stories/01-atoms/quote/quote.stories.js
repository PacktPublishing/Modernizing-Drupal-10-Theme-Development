import Quote from './quote.html.twig';

export default {
  title: 'Design System/Atoms/Quote',
  args: {
    quote: 'Lorem ipsum',
    author: 'Luca Lusso',
  },
};

const TemplateQuote = ({ quote, author }) =>
  Quote({
    quote,
    author,
  });

export const Default = TemplateQuote.bind({});
