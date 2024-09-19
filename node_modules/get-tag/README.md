# get-tag
Create HTML tag strings on the fly.

## Installation
Install the package from [npm](https://www.npmjs.com/package/get-tag):

```bash
npm install get-tag
```

## Usage
```js
const getTag = require('get-tag');

console.log(getTag('title', 'Some Title'));
// <title>Some Title</title>

console.log(getTag('a', 'Some Link', {href: 'foo.com'}));
// <a href="foo.com">Some link</a>

console.log(getTag('meta', null, {name: 'author', content: 'foo'}));
// <meta name="author" content="foo">
```

If the provided HTML tag name is included in the [void-elements](https://www.w3.org/TR/2011/WD-html-markup-20110113/syntax.html#void-elements) list, then `selfClosing` will be set to `true`.