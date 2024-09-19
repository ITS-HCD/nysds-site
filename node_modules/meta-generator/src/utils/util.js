const getTag = require('get-tag');
const { PRE_TAGGED, SUPPORTED_ARGS } = require('./constants');

function isObject(obj) {
  if (!obj || obj === undefined) return false;
  return typeof obj === 'object' && obj.constructor === Object;
}

function isString(str) {
  return typeof str === 'string';
}

function twitterHandle(handle) {
  if (!handle || !isString(handle)) {
    return '';
  }
  return `@${handle}`;
}

function HTMLComment(comment, fallback) {
  if (
    (!comment && !fallback) ||
    (!isString(comment) && !isString(fallback))
  ) {
    return '';
  }
  return `<!-- ${comment || fallback} -->`;
}

function getDnsTags(data, rel) {
  if (!data || data === undefined) return '';

  if (isString(data)) {
    return getTag('link', null, {
      rel: rel,
      href: data
    });
  } else if (Array.isArray(data)) {
    return data
      .map((link) => {
        if (isString(link)) {
          return getTag('link', null, {
            rel: rel,
            href: link
          });
        } else if (isObject(link)) {
          const crossOrigin = link.crossorigin && 'crossorigin';
          return `<link rel="${rel}" href="${link.url}" ${crossOrigin}>`;
        }
      });
  }
}

function handleDnsResolution(preconnect, dnsPrefetch) {
  if (!preconnect && !dnsPrefetch) return '';
  return [
    getDnsTags(preconnect, 'preconnect'),
    getDnsTags(dnsPrefetch, 'dns-prefetch'),
  ].filter(Boolean);
}

function handleCustomCrawlers(data) {
  if (
    !data ||
    !Object.hasOwn(data, 'crawlers') ||
    !isObject(data.crawlers)
  ) {
    return '';
  }
  const tags = [];
  for (const key in data.crawlers) {
    tags.push(getTag('meta', null, {
      name: key,
      content: data.crawlers[key]
    }));
  }
  return tags;
}

function handleAlternateLocales(locales) {
  if (!locales || !Array.isArray(locales) || !locales.length) {
    return '';
  }
  return locales
    .map((locale) => {
      return getTag('meta', null, {
        property: 'og:locale:alternate',
        content: locale,
      });
    });
}

function getAttributes(str) {
  if (!str || !isString(str)) {
    return '';
  }

  const values = str.split(':');

  return !values.length ? '' : {
    content: values[0],
    attributes: values.slice(1).join(' ')
  };
}

function getStaticAssets(tagsObj) {
  if (!isObject(tagsObj)) return [];

  function create(tag, val, key, isInline) {
    if (isString(val)) {
      if (!isInline) {
        return handleString(tag, val);
      }
      return getTag(tag, val);
    }
    return handleArray(val, tag, key, isInline);
  }

  return Object.entries(tagsObj)
    .filter((tagInfo) => tagInfo[1])
    .map(([tag, val]) => {
      switch (tag) {
        case 'inline_css':
          return create('style', val, 'css', true);
        case 'inline_js':
          return create('script', val, 'js', true);
        case 'css':
          return create('link', val, null, false);
        case 'js':
          return create('script', val, null, false);
      }
    });
}

function handleString(tagName, data) {
  const { content, attributes } = getAttributes(data);
  let defaultAttributes = {};

  if (tagName === 'script') {
    defaultAttributes = { src: content };
  } else if (tagName === 'link') {
    defaultAttributes = { rel: 'stylesheet', href: content }
  }

  if (!attributes) {
    return getTag(tagName, null, defaultAttributes);
  } else {
    return getTag(tagName, null, attributes);
  }
}

function handleArray(data, tagName, key, isInlineAsset) {
  if (isInlineAsset) {
    return data
      .map((val) => {
        if (isString(val)) {
          return getTag(tagName, val);
        } else if (isObject(val)) {
          const temp = val[key];
          delete val[key];
          return getTag(tagName, temp, val);
        }
      })
  } else {
    return data
      .map((val) => {
        const { content, attributes } = getAttributes(val);
        const map = {
          link: {
            noAttributes: getTag('link', null, { rel: 'stylesheet', href: content }),
            withAttributes: `<link ${attributes} href="${content}">`
          },
          script: {
            noAttributes: `<script src="${content}"></script>`,
            withAttributes: `<script src="${content}" ${attributes}></script>`
          }
        }
        if (!attributes) {
          return map[tagName]['noAttributes'];
        } else {
          return map[tagName]['withAttributes'];
        }
      })
  }
}

function formatObjects(data, ...objects) {
  const arr = Object.entries(Object.assign({}, ...objects));
  return arr
    .filter((tagData) => tagData[1])
    .map(([tag, value]) => {
      if (PRE_TAGGED.includes(tag)) {
        return value;
      } else if (tag.includes('twitter')) {
        return getTag('meta', null, {
          [data.twitter_attr_name || 'name']: tag,
          content: value,
        });
      } else if (tag.includes('og')) {
        return getTag('meta', null, { property: tag, content: value });
      } else {
        return getTag('meta', null, {
          name: tag,
          content: value,
        });
      }
    })
    .flat(2)
}

function isValidInput(data) {
  if (
    data !== undefined &&
    data &&
    isObject(data) &&
    Object.keys(data).length
  ) {
    return true;
  }
  return false;
}

module.exports = {
  twitterHandle,
  isObject,
  HTMLComment,
  handleCustomCrawlers,
  handleDnsResolution,
  handleAlternateLocales,
  getDnsTags,
  getAttributes,
  getStaticAssets,
  formatObjects,
  isValidInput,
};
