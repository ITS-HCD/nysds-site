const getTag = require('get-tag');
const {
  HTMLComment,
  twitterHandle,
  handleAlternateLocales,
  handleDnsResolution,
  handleCustomCrawlers,
  formatObjects,
  isValidInput,
  getStaticAssets,
} = require('./utils/util');

module.exports = (data) => {
  if (!isValidInput(data)) {
    console.error('No data was added into the meta-generator! Provide an object with supported arguments');
    return [];
  }

  const metadata = {
    charset: getTag('meta', null, {
      charset: data.charset || 'utf-8',
    }),
    'http-equiv': getTag('meta', null, {
      'http-equiv': 'X-UA-Compatible',
      content: 'IE=edge',
    }),
    'viewport': 'width=device-width, initial-scale=1',
    'title': data.title && [
      getTag('title', data.title),
      getTag('meta', null, {name: 'title', content: data.title})
    ].flat(),
    'dns': handleDnsResolution(data.preconnect, data.dns_prefetch),
    'author': data.name,
    'description': data.desc || data.description,
    'robots': data.robots,
    'crawlers': handleCustomCrawlers(data),
    'generator': data.generator,
  }

  const openGraph = {
    'og:comment': data.comments && HTMLComment(data.og_comment, 'Open Graph'),
    'og:type': data.type || 'website',
    'og:url': data.url,
    'og:site_name': data.site_name,
    'og:video': data.og_video,
    'og:audio': data.og_audio,
    'og:determiner': data.og_determiner,
    'og:locale:alternate': handleAlternateLocales(data.og_alternate_locales),
    'og:locale': data.locale || 'en_US',
    'og:title': data.og_title || data.title,
    'og:description': data.og_desc || data.desc || data.description,
    'og:image': data.og_image || data.img || data.image,
    'og:image:alt': data.og_image_alt || data.img_alt || data.image_alt,
    'og:image:width': data.og_image_width || data.img_width || data.image_width,
    'og:image:height': data.og_image_height || data.img_height || data.image_height,
    'og:image:type': data.og_image_type || data.og_img_type,
    'og:image:secure_url': data.og_secure_img_url || data.og_secure_image_url,
  }

  const twitter = {
    'twitter:comment': data.comments && HTMLComment(data.twitter_comment, 'Twitter'),
    'twitter:card': data.twitter_card_type || 'summary',
    'twitter:site': twitterHandle(data.twitter_handle),
    'twitter:creator': twitterHandle(data.creator_handle || data.twitter_handle),
    'twitter:url': data.url,
    'twitter:title': data.twitter_title || data.title,
    'twitter:description': data.twitter_desc || data.desc || data.description,
    'twitter:image': data.twitter_image || data.img || data.image,
    'twitter:image:alt': data.twitter_image_alt || data.img_alt || data.image_alt,
  }

  const staticAssets = getStaticAssets({
    css: data.css,
    'inline_css': data.inline_css,
    js: data.js,
    'inline_js': data.inline_js,
  }).flat();

  let canonical, customTags = '';

  if (data.url) {
    canonical = getTag('link', null, {
      rel: 'canonical',
      href: data.url,
    });
  }

  if (data.custom) {
    customTags = data.custom
      .map((item) => {
        return getTag(item.tag, item.text, item.attrs, item.selfClosing || false);
      })
  }

  const mergedTags = formatObjects(data, metadata, openGraph, twitter);
  const tags = [
    ...mergedTags,
    canonical,
    ...customTags,
    ...staticAssets,
  ].filter(Boolean);

  return data.minified
    ? tags.join('').replace(/[\n|\n\t]/gm, '')
    : tags
}
