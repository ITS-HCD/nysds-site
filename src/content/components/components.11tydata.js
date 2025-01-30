const todaysDate = new Date();

module.exports = {
  layout: "layouts/base.njk", // Default layout for all components

  eleventyComputed: {
      section: "components",
      permalink: (data) => {
          if (data.draft) { return false; }
          // Use existing permalink or default to file path stem
          return data.permalink || data.page.filePathStem + "/";
      },
  },
};