import ContactUsPage from './contact-us.html.twig';
import * as Breadcrumb from '../../01-atoms/breadcrumb/breadcrumb.stories';
import * as Title from '../../01-atoms/title/title.stories';
import * as Header from '../../03-organisms/header/header.stories';
import * as Footer from '../../03-organisms/footer/footer.stories';
import * as Template8 from '../../04-templates/template8/template8.stories';
import * as Page from '../../03-organisms/page/page.stories';
import * as Region from '../../03-organisms/region/region.stories';
import * as Block from '../../02-molecules/block/block.stories';

export default {
  title: 'Design System/Pages/Contact Us',
  args: {
    content: Page.Default({
      header: Header.Default({
        ...Header.default.args,
        background: false,
      }),
      breadcrumb: Region.Default({
        ...Region.default.args,
        content: Block.Default({
          ...Block.default.args,
          label: null,
          content: Breadcrumb.Default({
            breadcrumb: [
              {
                url: '#',
                text: 'Home',
              },
              {
                text: 'Contact Us',
              },
            ],
          }),
        }),
      }),
      content: Region.Default({
        ...Region.default.args,
        content: [
          Block.Default({
            ...Block.default.args,
            label: null,
            content: Title.Default({
              ...Title.default.args,
              title: 'Contact Us',
            }),
          }),
          Block.Default({
            ...Block.default.args,
            label: null,
            content: Template8.Default({
              ...Template8.default.args,
            }),
          }),
        ].join(''),
      }),
      sidebar: [],
      footer: Footer.Default({
        ...Footer.default.args,
      }),
    }),
  },
};

export const Default = ({ content }) =>
  ContactUsPage({
    content,
  });
