# slidev-theme-gravitek

[![NPM version](https://img.shields.io/npm/v/@gravitek/slidev-theme-gravitek?color=3AB9D4&label=)](https://www.npmjs.com/package/@gravitek/slidev-theme-gravitek)

A [Gravitek](https://gravitek.io) theme for [Slidev](https://github.com/slidevjs/slidev).

<!--
  Learn more about how to write a theme:
  https://sli.dev/guide/write-theme.html
--->

<!--
  run `npm run dev` to check out the slides for more details of how to start writing a theme
-->

<!--
  Put some screenshots here to demonstrate your theme

  Live demo: [...]
-->

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

<pre><code>---
theme: <b>@gravitek/slidev-theme-gravitek</b>
---</code></pre>

Theme cannot contain images, so you need to copy logos from the [public folder](./public) to your Slidev project's `public` folder manually.

Learn more about [how to use a theme](https://sli.dev/guide/theme-addon#use-theme).

## Layouts

This theme provides the following layouts:

- **cover**: A cover slide layout for title slides.
- **default**: The default slide layout.
- **two-cols**: A two-column layout with customizable gap.
- **center**: A centered layout for titles or important messages.
- **section**: A layout for section slides with centered content.

## Components

This theme provides the following components:

- **InsightBox**: A box to highlight insights or important information.

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG
