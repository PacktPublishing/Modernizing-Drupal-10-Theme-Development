import TripsViewPage from './template4.html.twig';
import * as View from '../../03-organisms/view/view.stories';
import * as Form from '../../03-organisms/form/form.stories';
import * as ExposedForm from '../../03-organisms/view/exposed-form.stories';

export default {
  title: 'Design System/Templates/Template4',
  args: {
    content: [
      View.Default({
        ...View.default.args,
        exposed: Form.Default({
          ...Form.default.args,
          children: ExposedForm.Default({
            ...ExposedForm.default.args,
          }),
        }),
      }),
    ].join(''),
  },
};

export const Default = ({ content }) =>
  TripsViewPage({
    content,
  });
