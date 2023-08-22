import Maintenance from './maintenance.html.twig';
import * as Logo from '../../01-atoms/logo/logo.stories';

export default {
  title: 'Design System/Molecules/Maintenance',
  args: {
    logo: Logo.Default({
      ...Logo.default.args,
    }),
    title: 'Under maintenance',
    message:
      'The site is currently under maintenance. We should be back shortly. Thank you for your patience.',
  },
};

export const Default = ({ logo, title, message }) =>
  Maintenance({
    logo,
    title,
    message,
  });
