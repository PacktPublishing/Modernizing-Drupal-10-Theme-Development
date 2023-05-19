import Trips from './trips.html.twig';
import * as Breadcrumb from '../../01-atoms/breadcrumb/breadcrumb.stories';
import * as Title from '../../01-atoms/title/title.stories';
import * as Promotion from '../../01-atoms/promotion/promotion.stories';
import * as Header from '../../03-organisms/header/header.stories';
import * as Footer from '../../03-organisms/footer/footer.stories';
import * as Page from '../../03-organisms/page/page.stories';
import * as Template4 from '../../04-templates/template4/template4.stories';
import * as Region from '../../03-organisms/region/region.stories';
import * as Block from '../../02-molecules/block/block.stories';
import * as View from '../../03-organisms/view/view.stories';
import * as Container from '../../02-molecules/form/container.stories';

export default {
  title: 'Design System/Pages/Trips',
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
                  text: 'Trips',
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
            }),
          }),
          Block.Default({
            ...Block.default.args,
            label: null,
            content: Template4.Default({
              ...Template4.default.args,
            }),
          }),
        ].join(''),
      }),
      sidebar: Region.Default({
        ...Region.default.args,
        content: [
          Block.WithBorder({
            ...Block.default.args,
            label: 'Promotions',
            content: Container.Default({
              ...Container.default.args,
              children: [
                View.Default({
                  ...View.default.args,
                  rows: [
                    Promotion.Default({
                      ...Promotion.default.args,
                    }),
                    Promotion.Default({
                      ...Promotion.default.args,
                    }),
                  ].join(''),
                  pager: null,
                  spaceRows: false,
                }),
              ],
            }),
          }),
        ].join(''),
      }),
      footer: Footer.Default({
        ...Footer.default.args,
      }),
    }),
  },
};

const Template = ({ content }) =>
  Trips({
    content,
  });

export const Default = Template.bind({});
