import Home from './trip.html.twig';
import * as Breadcrumb from '../../01-atoms/breadcrumb/breadcrumb.stories';
import * as Quote from '../../01-atoms/quote/quote.stories';
import * as Title from '../../01-atoms/title/title.stories';
import * as Banner from '../../02-molecules/banner/banner.stories';
import * as Weather from '../../02-molecules/weather/weather.stories';
import * as Region from '../../03-organisms/region/region.stories';
import * as Header from '../../03-organisms/header/header.stories';
import * as Footer from '../../03-organisms/footer/footer.stories';
import * as Template2 from '../../04-templates/template2/template2.stories';
import * as Page from '../../03-organisms/page/page.stories';
import * as Block from '../../02-molecules/block/block.stories';

export default {
  title: 'Design System/Pages/Trip',
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
                  url: '#',
                  text: 'Trips',
                },
                {
                  text: 'Example trip',
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
            content: Template2.Default({
              ...Template2.default.args,
            }),
          }),
        ].join(''),
      }),
      sidebar: Region.Default({
        ...Region.default.args,
        content: [
          Block.Default({
            ...Block.default.args,
            label: null,
            content: Quote.Default({
              ...Quote.default.args,
            }),
          }),
          Block.Default({
            ...Block.default.args,
            label: null,
            content: Weather.Default({
              ...Weather.default.args,
              infoLabel: 'View all',
            }),
          }),
          Block.Default({
            ...Block.default.args,
            label: null,
            content: Banner.Default({
              ...Banner.default.args,
            }),
          }),
        ].join(''),
      }),
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

const Template = ({ content }) =>
  Home({
    content,
  });

export const Default = Template.bind({});
