import ForecastPage from './template7.html.twig';
import * as Forecast from '../../03-organisms/forecast/forecast.stories';

export default {
  title: 'Design System/Templates/Template7',
  args: {
    content: [
      Forecast.Default({
        ...Forecast.default.args,
      }),
    ].join(''),
  },
};

export const Default = ({ content }) =>
  ForecastPage({
    content,
  });
