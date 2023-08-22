import DrupalAttribute from 'drupal-attribute';
import ContactUsPage from './template8.html.twig';
import * as Form from '../../03-organisms/form/form.stories';
import * as Element from '../../02-molecules/form/element.stories';
import * as Label from '../../01-atoms/form/label.stories';
import * as Button from '../../01-atoms/form/button.stories';
import * as Textarea from '../../01-atoms/form/textarea.stories';
import * as Container from '../../02-molecules/form/container.stories';

export default {
  title: 'Design System/Templates/Template8',
  args: {
    content: [
      Form.Default({
        children: [
          Element.Default({
            ...Element.default.args,
            label: Label.Default({
              ...Label.default.args,
              title: 'Your name',
            }),
            description: null,
          }),
          Element.Default({
            ...Element.default.args,
            label: Label.Default({
              ...Label.default.args,
              title: 'Your email address',
            }),
            description: null,
          }),
          Element.Default({
            ...Element.default.args,
            label: Label.Default({
              ...Label.default.args,
              title: 'Subject',
            }),
            description: null,
          }),
          Element.Default({
            ...Element.default.args,
            children: Textarea.Default({
              ...Textarea.default.args,
              attributes: new DrupalAttribute().setAttribute('rows', 12),
            }),
            label: Label.Default({
              ...Label.default.args,
              title: 'Message',
            }),
            description: null,
          }),
          Container.Default({
            ...Container.default.args,
            children: Button.Default({
              ...Button.default.args,
              label: 'Send message',
              fullWidth: false,
            }),
          }),
        ].join(''),
      }),
    ].join(''),
  },
};

export const Default = ({ content }) =>
  ContactUsPage({
    content,
  });
