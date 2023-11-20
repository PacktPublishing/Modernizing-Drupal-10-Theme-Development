# ERRATA CORRIGE

## Chapter 1

* Page 14, figure 1.6 should be [this](ERRATA/1.6.png).
* Page 18, note box, last sentence (`This text is not part of the note. I must be moved outside, just before the next sentence (At the end...)`) must be ignored. 

## Chapter 2

* Page 25, last paragraph: `Figure 3.1` should be `Figure 2.1`.
* Page 35, point 3: `*.xhtml.twig` should be `*.html.twig` (print version and some digital versions are correct).
* Page 35, point 4: `The last file we need to create is the main.css file` should be `The last file we need to create is the tailwind.css file`.
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
