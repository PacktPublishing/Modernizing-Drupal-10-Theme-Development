import Details from './details.html.twig';
import * as Term from '../term/term.stories';

export default {
  title: 'Design System/Atoms/Details',
  args: {
    first: Term.Default({
      label: 'Duration',
      value: '1 Day',
      ...Term.Default.args,
    }),
    second: Term.Default({
      label: 'Level',
      value: 'Intermediate',
      ...Term.Default.args,
    }),
  },
};

const Template = ({ first, second }) =>
  Details({
    first,
    second,
  });

export const Default = Template.bind({});
