import DrupalAttribute from 'drupal-attribute';
import UserLogin from './user-login.html.twig';
import * as Button from '../../01-atoms/form/button.stories';
import * as Label from '../../01-atoms/form/label.stories';
import * as Link from '../../01-atoms/link/link.stories';
import * as Element from '../../02-molecules/form/element.stories';
import * as Form from './form.stories';

export default {
  title: 'Design System/Organisms/Form/User Login',
  args: {
    name: Element.Default({
      ...Element.default.args,
      label: Label.Default({
        ...Label.default.args,
        title: 'Username',
      }),
      description: {
        content: 'Enter your Alps Trips username.',
        attributes: new DrupalAttribute(),
      },
    }),
    pass: Element.Default({
      ...Element.default.args,
      label: Label.Default({
        ...Label.default.args,
        title: 'Password',
      }),
      description: {
        content: 'Enter the password that accompanies your username.',
        attributes: new DrupalAttribute(),
      },
    }),
    actions: Button.Default({
      ...Button.default.args,
      fullWidth: true,
    }),
    forgotLink: Link.Default({
      ...Link.default.args,
      title: 'Forgot your password?',
    }),
    registerLink: Link.Default({
      ...Link.default.args,
      title: 'Create new account',
    }),
    missingAccount: "Don't have an account yet?",
  },
  decorators: [
    (story) =>
      Form.Default({
        ...Form.default.args,
        children: story(),
        centered: true,
      }),
  ],
};

export const Default = ({
  name,
  pass,
  actions,
  forgotLink,
  registerLink,
  missingAccount,
}) =>
  UserLogin({
    name,
    pass,
    actions,
    forgotLink,
    registerLink,
    missingAccount,
  });
