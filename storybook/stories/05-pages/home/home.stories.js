import Home from './home.html.twig';
import * as Header from '../../03-organisms/header/header.stories';
import * as Footer from '../../03-organisms/footer/footer.stories';
import * as Template1 from '../../04-templates/template1/template1.stories';
import injectSwiper from '../../utils/inject-swiper';
import * as Page from '../../03-organisms/page/page.stories';
import * as Region from '../../03-organisms/region/region.stories';
import * as Block from '../../02-molecules/block/block.stories';
import * as Breadcrumb from "../../01-atoms/breadcrumb/breadcrumb.stories";

export default {
  title: 'Design System/Pages/Home',
  args: {
    content: Page.Default({
      header: Header.Default({
        ...Header.default.args,
      }),
      breadcrumb: Region.Default({
        ...Region.default.args,
        content: '<div data-drupal-messages-fallback="" class="hidden"></div>',
      }),
      content: Region.Default({
        ...Region.default.args,
        content: Block.Default({
          ...Block.default.args,
          label: null,
          content: Template1.Default({
            ...Template1.default.args,
          }),
        }),
      }),
      footer: Footer.Default({
        ...Footer.default.args,
      }),
    }),
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [(story) => injectSwiper(story)],
};

const Template = ({ content }) =>
  Home({
    content,
  });

export const Default = Template.bind({});
