# ERRATA CORRIGE

## Chapter 2

* Page 25, last paragraph: `Figure 3.1` should be `Figure 2.1`.
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
* Page 43, first paragraph: `Figure 3.6` should be `Figure 2.6`.

## Chapter 3

* Page 68, first paragraph: `Figure 4.5` should be `Figure 3.5`.

## Chapter 10

* Page 227, code for point 1 should be:
  ```twig
  {% extends "views-view--trips.html.twig" %}
  ```
* Page 227, point 2: `templates/views` should be `templates/form`

## Chapter 15

* Page 301, first paragraph should be:
  
  **REpresentational State Transfer (REST)** is an architectural approach to constructing web services. Embracing the simplicity of REST and leveraging the capabilities inherent to the internet's **Hypertext Transfer Protocol (HTTP)**, it accomplishes its goals by building upon existing systems and features rather than introducing novel standards, frameworks, or technologies.
