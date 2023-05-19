import Table from './table.html.twig';

export default {
  title: 'Design System/Atoms/Table',
  args: {
    headers: ['Header 1', 'Header 2'],
    rows: ['Row 1', 'Row 2'],
  },
};

const Template = ({ headers, rows }) =>
  Table({
    headers,
    rows,
  });

export const Default = Template.bind({});
