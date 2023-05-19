import SearchPage from './template6.html.twig';
import * as View from '../../03-organisms/view/view.stories';
import * as SearchResult from '../../02-molecules/search-result/search-result.stories';
import * as Form from '../../03-organisms/form/form.stories';
import * as ExposedForm from '../../03-organisms/view/exposed-form.stories';
import * as Element from '../../02-molecules/form/element.stories';
import * as Input from '../../01-atoms/form/input.stories';
import * as Container from '../../02-molecules/form/container.stories';
import * as Button from '../../01-atoms/form/button.stories';
import * as Label from '../../01-atoms/form/label.stories';

export default {
  title: 'Design System/Templates/Template6',
  args: {
    content: [
      View.Default({
        ...View.default.args,
        rows: [
          SearchResult.Default({
            ...SearchResult.default.args,
          }),
          SearchResult.Default({
            ...SearchResult.default.args,
            type: 'Offer',
          }),
          SearchResult.Default({
            ...SearchResult.default.args,
            type: 'Page',
          }),
          SearchResult.Default({
            ...SearchResult.default.args,
          }),
          SearchResult.Default({
            ...SearchResult.default.args,
          }),
        ].join(''),
        exposed: Form.Default({
          ...Form.default.args,
          children: ExposedForm.Default({
            ...ExposedForm.default.args,
            children: [
              Element.Default({
                ...Element.default.args,
                children: Input.Default({
                  ...Input.default.args,
                  attributes: Input.default.args.attributes.setAttribute(
                    'size',
                    '30',
                  ),
                }),
                label: Label.Default({
                  ...Label.default.args,
                  title: 'Keywords',
                }),
                description: '',
              }),
              Container.Default({
                ...Container.default.args,
                children: Button.Default({
                  ...Button.default.args,
                  label: 'Search',
                  marginTop: true,
                }),
              }),
            ].join(''),
          }),
        }),
      }),
    ].join(''),
  },
};

export const Default = ({ content }) =>
  SearchPage({
    content,
  });
