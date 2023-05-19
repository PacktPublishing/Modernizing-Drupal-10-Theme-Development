import ForecastPage from './forecast.html.twig';
import * as Breadcrumb from '../../01-atoms/breadcrumb/breadcrumb.stories';
import * as Title from '../../01-atoms/title/title.stories';
import * as Header from '../../03-organisms/header/header.stories';
import * as Footer from '../../03-organisms/footer/footer.stories';
import * as Template7 from '../../04-templates/template7/template7.stories';
import * as Page from '../../03-organisms/page/page.stories';
import * as Region from '../../03-organisms/region/region.stories';
import * as Block from '../../02-molecules/block/block.stories';

export default {
  title: 'Design System/Pages/Forecast',
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
                text: 'Forecast',
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
              title: 'Forecast',
            }),
          }),
          Block.Default({
            ...Block.default.args,
            label: null,
            content: Template7.Default({
              ...Template7.default.args,
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
  ForecastPage({
    content,
  });
