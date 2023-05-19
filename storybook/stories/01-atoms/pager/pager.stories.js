import DrupalAttribute from 'drupal-attribute';
import Pager from './pager.html.twig';

export default {
  title: 'Design System/Atoms/Pager',
  args: {
    headingId: 'paginator',
    items: {
      first: {
        href: '#',
        text: '« First',
        attributes: new DrupalAttribute(),
      },
      previous: {
        href: '#',
        text: '‹ Previous',
        attributes: new DrupalAttribute(),
      },
      pages: {
        5: {
          href: '#',
          text: '5',
        },
        6: {
          href: '#',
          text: '6',
        },
        7: {
          href: '#',
          text: '7',
        },
      },
      next: {
        href: '#',
        text: 'Next ›',
        attributes: new DrupalAttribute(),
      },
      last: {
        href: '#',
        text: 'Last »',
        attributes: new DrupalAttribute(),
      },
    },
    current: 6,
    ellipses: {
      previous: true,
      next: true,
    },
    ellipsesSymbol: '&hellip;',
  },
};

export const Default = ({
  headingId,
  items,
  current,
  ellipses,
  ellipsesSymbol,
}) =>
  Pager({
    headingId,
    items,
    current,
    ellipses,
    ellipsesSymbol,
  });
