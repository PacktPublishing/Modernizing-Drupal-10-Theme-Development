import Page from './page.html.twig';
import PageError from './page-error.html.twig';

export default {
  title: 'Design System/Organisms/Page',
  args: {
    header: 'header',
    breadcrumb: 'breadcrumb',
    help: 'help',
    content: 'content',
    sidebar: false,
    footer: 'footer',
  },
  decorators: [
    (story) =>
      `<div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>${story()}</div>`,
  ],
};

export const Default = ({
  header,
  breadcrumb,
  help,
  content,
  sidebar,
  footer,
}) =>
  Page({
    header,
    breadcrumb,
    help,
    content,
    sidebar,
    footer,
  });

export const Error = ({
  srMessage = 'Error',
  errorCode = '404',
  message1 = "Sorry, we couldn't find this page.",
  message2 = 'Maybe you can go back to the homepage.',
  url = 'https://www.example.com',
  cta = 'Back to homepage',
}) =>
  PageError({
    srMessage,
    errorCode,
    message1,
    message2,
    url,
    cta,
  });
