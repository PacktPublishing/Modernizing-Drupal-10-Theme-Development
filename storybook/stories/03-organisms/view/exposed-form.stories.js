import DrupalAttribute from 'drupal-attribute';
import ExposedForm from './exposed-form.html.twig';
import * as Button from '../../01-atoms/form/button.stories';
import * as Select from '../../01-atoms/form/select.stories';
import * as Container from '../../02-molecules/form/container.stories';
import * as Element from '../../02-molecules/form/element.stories';

const drupalAttributes = new DrupalAttribute();

export default {
  title: 'Design System/Organisms/View/Exposed form',
  args: {
    attributes: drupalAttributes,
    children: [
      Element.Default({
        ...Element.default.args,
        children: Select.Default({
          ...Select.default.args,
        }),
        description: '',
      }),
      Element.Default({
        ...Element.default.args,
        children: Select.Default({
          ...Select.default.args,
        }),
        description: '',
      }),
      Container.Default({
        ...Container.default.args,
        children: Button.Default({
          ...Button.default.args,
          marginTop: true,
        }),
      }),
    ].join(''),
  },
};

export const Default = ({ attributes, children }) =>
  ExposedForm({
    attributes,
    children,
  });
