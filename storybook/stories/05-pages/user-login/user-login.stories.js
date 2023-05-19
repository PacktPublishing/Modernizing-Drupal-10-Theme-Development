import UserLoginPage from './user-login.html.twig';
import * as Breadcrumb from '../../01-atoms/breadcrumb/breadcrumb.stories';
import * as Title from '../../01-atoms/title/title.stories';
import * as Header from '../../03-organisms/header/header.stories';
import * as Footer from '../../03-organisms/footer/footer.stories';
import * as Template3 from '../../04-templates/template3/template3.stories';
import * as Page from '../../03-organisms/page/page.stories';
import * as Region from '../../03-organisms/region/region.stories';
import * as Block from '../../02-molecules/block/block.stories';
import * as Logo from '../../01-atoms/logo/logo.stories';
import * as Menu from '../../02-molecules/menu/menu.stories';
import * as MenuItem from '../../01-atoms/menu-item/menu-item.stories';

export default {
  title: 'Design System/Pages/User Login',
  args: {
    content: Page.Default({
      header: Header.Default({
        ...Header.default.args,
        blocks: [
          Logo.Default({
            ...Logo.default.args,
          }),
          Block.BlockMenu({
            content: [
              Menu.Main({
                ...Menu.default.args,
              }),
            ],
          }),
          Menu.Default({
            items: [
              MenuItem.Secondary({
                title: 'Log in',
                url: 'https://www.alps-trips.com/user',
              }),
            ].join(''),
          }),
        ].join(''),
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
                text: 'Log in',
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
            }),
          }),
          Block.Default({
            ...Block.default.args,
            label: null,
            content: Template3.Default({
              ...Template3.default.args,
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
  UserLoginPage({
    content,
  });
