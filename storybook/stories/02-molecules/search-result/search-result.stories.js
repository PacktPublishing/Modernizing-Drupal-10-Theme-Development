import SearchResult from './search-result.html.twig';

export default {
  title: 'Design System/Molecules/Search result',
  args: {
    url: 'https://www.example.com',
    label: 'Lorem ipsum',
    type: 'Trip',
    body: 'Lorem excepteur elit enim fugiat pariatur esse nulla do est eu officia nulla sint adipisicing.',
  },
};

export const Default = ({ url, label, type, body }) =>
  SearchResult({
    url,
    label,
    type,
    body,
  });
