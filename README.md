# Design modern Drupal themes demo website

Clone the repository.

## Start the stack and build the site

* `ddev start`
* `ddev build`

The site will be available at https://packt.ddev.site and Storybook will be
available at https://packt.ddev.site:6006.

## Developing

When developing, you can use the following commands:

* `ddev browsersync` to start the browser sync server (site is then available at https://packt.ddev.site:3000)
* (on a new tab) `ddev watch` to watch for changes in the theme and compile them
* (on a new tab) `ddev storybook-watch` to watch for changes in the Storybook stories and compile them

## Custom DDEV commands

* `export-content` to export the content of the site
* `storybook-lint` to lint the Storybook stories
* `theme [command]` to run a command in the theme directory
* `backstop-init` to initialize BackstopJS
* `backstop` to run BackstopJS
