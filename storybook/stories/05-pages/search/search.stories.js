import Search from './search.html.twig';
import * as Breadcrumb from '../../01-atoms/breadcrumb/breadcrumb.stories';
import * as Title from '../../01-atoms/title/title.stories';
import * as Region from '../../03-organisms/region/region.stories';
import * as Header from '../../03-organisms/header/header.stories';
import * as Footer from '../../03-organisms/footer/footer.stories';
import * as Template6 from '../../04-templates/template6/template6.stories';
import * as Page from '../../03-organisms/page/page.stories';
import * as Block from '../../02-molecules/block/block.stories';

export default {
  title: 'Design System/Pages/Search',
  args: {
    content: Page.Default({
      header: Header.Default({
        ...Header.default.args,
        background: false,
      }),
      breadcrumb: Region.Default({
        ...Region.default.args,
        content: [
          Block.Default({
            ...Block.default.args,
            label: null,
            content: Breadcrumb.Default({
              breadcrumb: [
                {
                  url: '#',
                  text: 'Home',
                },
                {
                  text: 'Search',
                },
              ],
            }),
          }),
          '<div data-drupal-messages-fallback="" class="hidden"></div>',
        ].join(''),
      }),
      content: Region.Default({
        ...Region.default.args,
        content: [
          Block.Default({
            ...Block.default.args,
            label: null,
            content: Title.Default({
              ...Title.default.args,
              title: 'Search',
            }),
          }),
          Block.Default({
            ...Block.default.args,
            label: null,
            content: Template6.Default({
              ...Template6.default.args,
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
  decorators: [
    (story) =>
      `<div className="dialog-off-canvas-main-canvas" data-off-canvas-main-canvas>${story()}</div>`,
  ],
};

export const Default = ({ content }) =>
  Search({
    content,
  });
