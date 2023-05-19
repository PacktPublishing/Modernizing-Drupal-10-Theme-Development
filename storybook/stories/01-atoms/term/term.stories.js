import DrupalAttribute from 'drupal-attribute';
import Details from './term.html.twig';

export default {
  title: 'Design System/Atoms/Term',
  args: {
    label: 'Duration',
    value: '3 Days',
    attributes: new DrupalAttribute(),
  },
};

const Template = ({ label, value, attributes }) =>
  Details({
    label,
    value,
    attributes,
  });

export const Default = Template.bind({});
