import Level from './level.html.twig';
import * as Breadcrumb from '../../01-atoms/breadcrumb/breadcrumb.stories';
import * as Title from '../../01-atoms/title/title.stories';
import * as Region from '../../03-organisms/region/region.stories';
import * as Header from '../../03-organisms/header/header.stories';
import * as Footer from '../../03-organisms/footer/footer.stories';
import * as Template5 from '../../04-templates/template5/template5.stories';
import * as Page from '../../03-organisms/page/page.stories';
import * as Block from '../../02-molecules/block/block.stories';

export default {
  title: 'Design System/Pages/Level',
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
                  text: 'Intermediate',
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
              title: 'Intermediate',
            }),
          }),
          Block.Default({
            ...Block.default.args,
            label: null,
            content: Template5.Default({
              ...Template5.default.args,
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
  Level({
    content,
  });
