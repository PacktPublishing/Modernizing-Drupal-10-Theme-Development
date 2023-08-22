import Forecast from './forecast.html.twig';
import * as Weather from '../../02-molecules/weather/weather.stories';

export default {
  title: 'Design System/Organisms/Forecast',
  args: {
    city: 'Turin',
    forecasts: [
      Weather.Default({
        ...Weather.default.args,
      }),
      Weather.Default({
        ...Weather.default.args,
      }),
      Weather.Default({
        ...Weather.default.args,
      }),
      Weather.Default({
        ...Weather.default.args,
      }),
      Weather.Default({
        ...Weather.default.args,
      }),
    ].join(''),
  },
};

export const Default = ({ city, forecasts }) =>
  Forecast({
    city,
    forecasts,
  });
