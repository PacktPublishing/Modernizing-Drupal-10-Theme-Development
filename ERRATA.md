# ERRATA CORRIGE

## Chapter 1

* Page 11, composer commands need a double dash prefix. The correct commands are `composer update --prefer-dist` and `composer install --prefer-dist`.
* Page 14, figure 1.6 should be [this](ERRATA/1.6.png).
* Page 18, note box, last sentence (`This text is not part of the note. I must be moved outside, just before the next sentence (At the end...)`) must be ignored.
* Page 21, `default.services.yml` should be `development.services.yml`.

## Chapter 2

* Page 25, last paragraph: `Figure 3.1` should be `Figure 2.1`.
* Page 35, point 3: `*.xhtml.twig` should be `*.html.twig` (print version and some digital versions are correct).
* Page 35, point 4: `The last file we need to create is the main.css file` should be `The last file we need to create is the tailwind.css file`.
* Page 36, webpack paragraph: the yarn command should be `yarn add -D webpack@5 webpack-cli@5 mini-css-extract-plugin@2 css-loader@6 postcss-loader@7`.
* Page 39, `alps_trips.library.yml` content should be:
  ```yml
  main:
    version: VERSION
    js:
      build/main.js: {}
    css:
      theme:
        build/style.css: {}
  ```
* Page 40: `ddev get drud/ddev-browsersync` should be `ddev get ddev/ddev-browsersync` (both will work, but now all official ddev extensions are under the `ddev` project on GitHub).
* Page 43, first paragraph: `Figure 3.6` should be `Figure 2.6`.

## Chapter 3

* Page 72, figure 3.7 should be [this](ERRATA/3.7.png).
* Page 68, first paragraph: `Figure 4.5` should be `Figure 3.5`.

## Chapter 5

* Page 119: the last paragraph should be:

Now that we’re on our custom theme, with our custom layout, we can start using Tailwind classes to style it. Remember that Tailwind looks at your templates to find which classes need to be included in the final CSS, so every time you add or change a Tailwind class, you must rebuild your theme assets. In development, you can use the `start:dev` Yarn command to run webpack in watch mode; this will recompile the `styles.css` file every time a Twig file changes.

Before proceeding, we need to tweak our `tailwind.config.js` to match the one from Storybook. First of all, we need to install two yarn packages (run the next command from the `web/themes/custom/alps_trips` folder inside the Docker container):

```
yarn add -D @tailwindcss/typography @tailwindcss/forms
```

Finally, we must edit the `tailwind.config.js` to be equal to:

```
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
```

With this configuration, we've:

* registered the two new Tailwind plugins
* added some classes to the safe list
* added some colors

Now we can rebuild the `styles.css` file using a shortcut of the `start:dev` Yarn command that can be executed from the outside of the Docker web container:

## Chapter 6

* Page 167: `Finally, we need a template to render the alps_base_lat_lng theme hook:` should be: 'Finally, we need a template to render the alps_base_lat_lng theme hook. Create a file named templates/components/alps-base-lat-lng.html.twig with this content:'.
* Page 173: ckeditor5-stylesheets configuration should be `- build/styles.css`.

## Chapter 7

* Page 183, point 1: `input.html` should be `input.html.twig`.
* Page 184, point 2: `input--submit.html` should be `input--submit.html.twig`.

## Chapter 10

* Page 227, code for point 1 should be:
  ```twig
  {% extends "views-view--trips.html.twig" %}
  ```
* Page 227, point 2: `templates/views` should be `templates/form`

## Chapter 15

* Page 301, first paragraph should be:
  
  **REpresentational State Transfer (REST)** is an architectural approach to constructing web services. Embracing the simplicity of REST and leveraging the capabilities inherent to the internet's **Hypertext Transfer Protocol (HTTP)**, it accomplishes its goals by building upon existing systems and features rather than introducing novel standards, frameworks, or technologies.
