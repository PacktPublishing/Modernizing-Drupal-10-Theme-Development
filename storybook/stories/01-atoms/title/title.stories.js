import Title from './title.html.twig';

export default {
  title: 'Design System/Atoms/Title',
  args: {
    title: 'Example trip',
  },
};

const Template = ({ title }) =>
  Title({
    title,
  });

export const Default = Template.bind({});
