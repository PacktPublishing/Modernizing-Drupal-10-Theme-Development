import Weather from './weather.html.twig';

export default {
  title: 'Design System/Molecules/Weather',
  args: {
    date1: '05/02/2023',
    date2: '15:00',
    title: 'Broken Clouds',
    temp: '6.61 °C',
    dialogUrl:
      'https://packt.ddev.site/weather/Provincia%20di%20Alessandria/2023-02-05%2015%3A00%3A00',
    infoLabel: 'More info',
    dialog: true,
  },
  decorators: [(story) => `<div class="w-1/4">${story()}</div>`],
};

export const Default = ({
  date1,
  date2,
  title,
  temp,
  dialogUrl,
  infoLabel,
  dialog,
}) =>
  Weather({
    date1,
    date2,
    title,
    temp,
    dialogUrl,
    infoLabel,
    dialog,
  });
