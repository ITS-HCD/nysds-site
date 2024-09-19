# meta-generator
Utility for generating document metadata. Populate the `<head>` of your web pages on the fly. Can be used with Static Site Generators like Eleventy, React apps, or any place that JavaScript is supported.

## Installation

```
npm install meta-generator
```

## What does it do?

```js
const metagen = require('meta-generator');

console.log(metagen({
  title: 'Metadata Generator',
  desc: 'Utility for generating document metadata.',
  url: 'https://tannerdolby.com',
  img: 'https://tannerdolby.com/images/arch-spiral-large.jpg',
  img_alt: 'Archimedean Spiral',
  twitter_card_type: 'summary_large_image',
  twitter_handle: 'tannerdolby',
  name: 'Tanner Dolby',
  generator: 'eleventy',
  comments: true,
  css: ['style.css', 'design.css'],
  js: ['foo.js', 'bar.js:async'],
  inline_css: 'h1 { color: #f06; }',
  inline_js: 'console.log("hello, world.");'
}));
```

which returns array of `<meta>` tags and other document metadata:

```js
[
  '<meta charset="utf-8">',
  '<meta http-equiv="X-UA-Compatible" content="IE=edge">',
  '<meta name="viewport" content="width=device-width, initial-scale=1">',
  '<title>Eleventy Plugin Meta Generator</title>',
  '<meta name="author" content="Tanner Dolby">',
  '<meta name="description" content="An eleventy shortcode for generating meta tags.">',
  '<meta name="generator" content="eleventy">',
  '<!-- Open Graph -->',
  '<meta property="og:type" content="website">',
  '<meta property="og:url" content="https://tannerdolby.com">',
  '<meta property="og:locale" content="en_US">',
  '<meta property="og:title" content="Eleventy Plugin Meta Generator">',
  '<meta property="og:description" content="An eleventy shortcode for generating meta tags.">',
  '<meta property="og:image" content="https://tannerdolby.com/images/arch-spiral-large.jpg">',
  '<meta property="og:image:alt" content="Archimedean Spiral">',
  '<!-- Twitter -->',
  '<meta name="twitter:card" content="summary_large_image">',
  '<meta name="twitter:site" content="@tannerdolby">',
  '<meta name="twitter:creator" content="@tannerdolby">',
  '<meta name="twitter:url" content="https://tannerdolby.com">',
  '<meta name="twitter:title" content="Eleventy Plugin Meta Generator">',
  '<meta name="twitter:description" content="An eleventy shortcode for generating meta tags.">',
  '<meta name="twitter:image" content="https://tannerdolby.com/images/arch-spiral-large.jpg">',
  '<meta name="twitter:image:alt" content="Archimedean Spiral">',
  '<link rel="canonical" href="https://tannerdolby.com">',
  '<link rel="stylesheet" href="style.css">',
  '<link rel="stylesheet" href="design.css">',
  '<style>h1 { color: #f06; }</style>',
  '<script src="foo.js"></script>',
  '<script src="bar.js" async></script>',
  '<script>console.log("hello, world.");</script>',
]
```

## Examples
- [11ty](https://github.com/tannerdolby/eleventy-plugin-metagen)
- [React](https://metagendocs.netlify.app/docs/react/intro)
