# Fundall, An expense tracker

This is the new [expense tracker application]() built with VueJs.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#the-links)
- [The process](#the-process)
  - [Tech Stack](#tech-stack)
  - [Project Folder Structure](#project-folder-structure)
  - [Git Contribution Guidelines](#git-contribution-guidelines)
  - [Project Folder Structure](#project-folder-structure)
  <!-- - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources) -->
<!-- - [Author](#author)
- [Acknowledgments](#acknowledgments) -->

## Overview

### The challenge

The challenge is to build [fundall-expense tracker]() using VueJS, Tailwind, Vitest, Vue-Router, and Pinia.

### The links

- [Figma Link](https://www.figma.com/file/OEtHmLrhs9E4LAkWCkBXte/Expense-Tracker-Mini-Project-Frontend?type=design&node-id=2-1350&mode=design&viewport=418%2C390%2C0.024849005043506622&t=70tkFZubWsOnETrx-0)
- [Staging Repo](https://github.com/)
- [Production Repo](https://github.com/)
- [Development URL]()
- [Development API URL]()
- [Production API URL]()
- [Production URL]()


## The process

### Tech Stack

`VueJS` | `HTML` | `TailwindCss` | `Vitest` | `Vue-Router` | `Pinia` | `Vite`


### Project Folder Structure

The folder structure contains the tree structure of what the entire project will look like.

```
├── src
│   ├── assets
│   │   └── images
│   ├── components
│   │   ├── auth
│   │   ├── dashboard
│   │   ├── svgIcon.vue
│   │   ├── footer.html
│   │   ├── header.html
│   │   ├── spinner.html
│   │   └── pagination.html
│   ├── layout
│   │   ├── index.vue
│   │   ├── sideNav.vue
│   │   ├── topNav.vue
│   │   └── footer.vue
│   ├── router
│   │   └── index.ts
│   ├── store
│   │   ├── auth.ts
│   │   └── events.vue
│   ├── types
│   │   ├── auth.ts
│   │   ├── user.ts
│   │   ├── topNav.vue
│   │   └── footer.vue
|   ├── utils
│   │   └── date.ts
|   ├── views
│   │   ├── auth
│   │   └── dashboard
│   │   ├── index.vue
│   │   ├── error.vue
│   │   ├── reach-out.html
│   │   ├── our-services.html
│   │   ├── get-talents.html
│   │   ├── our-products.html
│   │   ├── reach-out.html
|   ├── index.html
|   ├── index.css
├── .gitignore
├── readme.md
└── styleguide.md
```

#### File/Folder Breakdown
`├── styleguide.md`  is meant to guide your use of the styles created <br />
`├── readme.md` helps you understand the project, how to use it, and how to contribute <br />
`├── .gitignore` is meant to exclude certain files and folders that are not necessary <br />
`├── src` 📂 this folder contains all the source code for the walure capital website <br />
`├── assets` 📂 this folder contains all the assets (images, videos, css, js etc.) for the Walure Capital website <br />
`├── css` 📂 this folder contains all other necessary css codes for the Walure Capital website <br />
`├── js` 📂 this folder contains all other necessary js codes for the Walure Capital website <br />
`├── img` 📂 this folder contains all the image assets for the Walure Capital website <br />
`├── components` 📂 this folder contains all the reusable components <br />
`├── careers.html` this file contains all the necessary codes for the reactive part of the careers page <br />
`├── spinner.html` this file contains all the necessary codes for the spinner component to be used for loading states <br />
`├── courses.html` this file contains all the necessary codes for the reactive part of the courses page <br />
`├── featured-courses.html` this file contains all the necessary codes for the featured-course part of the home page <br />
`├── footer.html` this file contains all the necessary codes for the footer <br />
`├── header.html` this file contains all the necessary codes for the header <br />
`├── pagination.html` this file contains all the necessary codes for the pagination <br />
`├── utils` 📂 this folder contains all the utility functions that will be resuable <br />
`├── validation.js` this file contains all the necessary codes for validating form fields <br />
`├── views` 📂 this folder contains all the pages for the Walure Capital website <br />
`├── about-walure-capital.html` this is the Walure Capital about page <br />
`├── build-your-career.html` this is the Walure Capital careers page <br />
`├── get-our-expertise.html` this is the Walure Capital consultations page <br />
`├── get-talents.html` this is the Walure Capital outsourcing page <br />
`├── our-products.html` this is the Walure Capital products page <br />
`├── our-services.html` this is the Walure Capital services page <br />
`├── reach-out.html` this is the Walure Capital contact page <br />
`├── courses` 📂 this folder contains all the pages for the courses on the Walure Capital website <br />
`├── our-courses.html` this is the Walure Capital courses page <br />
`├── course-details.html` this is the page that caters for details of each course on the Walure Capital page <br />
`├── media` 📂 this folder contains all the pages for the media services on the Walure Capital website <br />
`├── our-media-services.html` this is the Walure Capital courses page <br />
`├── production.html` this is the Walure Capital courses page <br />
`├── rentals.html` this is the Walure Capital courses page <br />
`├── billboard.html` this is the Walure Capital courses page <br />
`├── index.css` this is the main style sheet for the Walure Capital website <br />
`├── index.html` this is the beginning for the Walure Capital website <br />

### Compiles and hot-reloads for development
Run `npm run dev` to start the development server. It will automatically rebuild the app upon file change.

local url for development: http://localhost:8700

### Compiles and hot-reloads for production
Run `npm run build` to start the production server.
<!--
### Run tests
Run `npm run test` in the terminal to run the tests. -->
