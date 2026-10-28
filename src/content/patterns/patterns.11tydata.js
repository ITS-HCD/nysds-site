module.exports = {
  layout: "layouts/3-col.njk",
  eleventyComputed: {
    section: "Patterns",
    permalink: (data) => {
      if (data.draft) return false;
      return data.permalink || data.page.filePathStem.replace("/content/", "/") + "/";
    }
  }
};
