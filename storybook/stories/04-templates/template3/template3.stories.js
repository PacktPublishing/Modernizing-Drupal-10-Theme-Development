import UserLoginPage from './template3.html.twig';
import * as UserLogin from '../../03-organisms/form/user-login.stories';
import * as Form from '../../03-organisms/form/form.stories';

export default {
  title: 'Design System/Templates/Template3',
  args: {
    content: [
      Form.Default({
        children: UserLogin.Default({
          ...UserLogin.default.args,
        }),
        centered: true,
      }),
    ].join(''),
  },
};

export const Default = ({ content }) =>
  UserLoginPage({
    content,
  });
