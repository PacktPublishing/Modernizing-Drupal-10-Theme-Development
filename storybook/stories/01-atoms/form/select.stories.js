import DrupalAttribute from 'drupal-attribute';
import Select from './select.html.twig';

const drupalAttributes = new DrupalAttribute();

export default {
  title: 'Design System/Atoms/Form/Select',
  args: {
    attributes: drupalAttributes,
    options: [
      {
        type: 'option',
        value: '1',
        selected: false,
        label: 'First option',
      },
      {
        type: 'option',
        value: '2',
        selected: true,
        label: 'Second option',
      },
      {
        type: 'option',
        value: '3',
        selected: false,
        label: 'Third option',
      },
      {
        type: 'optgroup',
        label: 'Group',
        options: [
          {
            type: 'option',
            value: '4',
            selected: false,
            label: 'Fourth option',
          },
          {
            type: 'option',
            value: '5',
            selected: false,
            label: 'Fifth option',
          },
          {
            type: 'option',
            value: '6',
            selected: false,
            label: 'Sixth option',
          },
        ],
      },
    ],
  },
  decorators: [(story) => `<div class="w-1/4">${story()}</div>`],
};
export const Default = ({ attributes, options }) =>
  Select({
    attributes,
    options,
  });
