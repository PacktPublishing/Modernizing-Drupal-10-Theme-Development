import Tabs from './tabs.html.twig';

export default {
  title: 'Design System/Molecules/Tabs',
  args: {
    title: 'Title',
    description: 'Lorem ipsum',
  },
};

const Template = ({ title, description }) =>
  Tabs({
    title,
    description,
  });

export const Default = Template.bind({});
