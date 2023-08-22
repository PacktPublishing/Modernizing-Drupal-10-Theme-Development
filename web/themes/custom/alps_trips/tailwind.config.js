const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

module.exports = {
  mode: 'jit',
  content: [
    './templates/**/*.html.twig',
    './components/**/*.twig',
    '../../../../storybook/stories/**/*.html.twig',
    './js/**/*.js',
  ],
  safelist: [
    'text-nord-0',
    'text-nord-1',
    'text-nord-2',
    'text-nord-3',
    'text-nord-4',
    'text-nord-5',
    'text-nord-6',
    'text-nord-7',
    'text-nord-8',
    'text-nord-9',
    'text-nord-10',
    'text-nord-11',
    'text-nord-12',
    'text-nord-13',
    'text-nord-14',
    'text-nord-15',
  ],
  theme: {
    extend: {
      colors: {
        'nord-0': '#2E3440',
        'nord-1': '#3B4252',
        'nord-2': '#434C5E',
        'nord-3': '#4C566A',
        'nord-4': '#D8DEE9',
        'nord-5': '#E5E9F0',
        'nord-6': '#ECEFF4',
        'nord-7': '#8FBCBB',
        'nord-8': '#88C0D0',
        'nord-9': '#81A1C1',
        'nord-10': '#5E81AC',
        'nord-11': '#BF616A',
        'nord-12': '#D08770',
        'nord-13': '#EBCB8B',
        'nord-14': '#A3BE8C',
        'nord-15': '#B48EAD',
      },
    },
  },
  // Add plugins
  plugins: [typography, forms],
};
