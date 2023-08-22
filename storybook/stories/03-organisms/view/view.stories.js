import DrupalAttribute from 'drupal-attribute';
import * as ExposedForm from './exposed-form.stories';
import TripView from './view.html.twig';
import * as Pager from '../../01-atoms/pager/pager.stories';
import * as Media from '../../02-molecules/media/media.stories';
import * as Form from '../form/form.stories';

export default {
  title: 'Design System/Organisms/View',
  args: {
    attributes: new DrupalAttribute(),
    titlePrefix: '',
    title: '',
    titleSuffix: '',
    header: '',
    exposed: '',
    attachmentBefore: '',
    rows: [
      Media.Default({
        title: 'Popular Hike',
        body: 'Veniam labore aliqua nisi aliquip dolore.',
        ...Media.default.args,
      }),
      Media.Default({
        title: 'Top route',
        body: 'Sint quis deserunt laborum velit amet tempor ipsum exercitation.',
        ...Media.default.args,
      }),
      Media.Default({
        title: 'Online booking',
        body: 'Lorem excepteur elit enim fugiat pariatur esse nulla do est eu officia nulla sint adipisicing.',
        ...Media.default.args,
      }),
      Media.Default({
        title: 'Popular Hike',
        body: 'Veniam labore aliqua nisi aliquip dolore.',
        ...Media.default.args,
      }),
      Media.Default({
        title: 'Top route',
        body: 'Sint quis deserunt laborum velit amet tempor ipsum exercitation.',
        ...Media.default.args,
      }),
      Media.Default({
        title: 'Online booking',
        body: 'Lorem excepteur elit enim fugiat pariatur esse nulla do est eu officia nulla sint adipisicing.',
        ...Media.default.args,
      }),
    ].join(''),
    empty: '',
    pager: Pager.Default({
      ...Pager.default.args,
    }),
    attachmentAfter: '',
    more: '',
    footer: '',
    feedIcons: '',
    spaceRows: true,
  },
};

const Template = ({
  attributes,
  titlePrefix,
  title,
  titleSuffix,
  header,
  exposed,
  attachmentBefore,
  rows,
  empty,
  pager,
  attachmentAfter,
  more,
  footer,
  feedIcons,
  spaceRows,
}) =>
  TripView({
    attributes,
    titlePrefix,
    title,
    titleSuffix,
    header,
    exposed,
    attachmentBefore,
    rows,
    empty,
    pager,
    attachmentAfter,
    more,
    footer,
    feedIcons,
    spaceRows,
  });

export const Default = Template.bind({});
export const Empty = Template.bind({});
Empty.args = {
  rows: '',
  empty: 'No results found.',
  pager: '',
};

export const WithHeader = Template.bind({});
WithHeader.args = {
  header: '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>',
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  footer: '<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>',
};

export const WithExposedForm = Template.bind({});
WithExposedForm.args = {
  exposed: Form.Default({
    ...Form.default.args,
    children: ExposedForm.Default({
      ...ExposedForm.default.args,
    }),
  }),
};
