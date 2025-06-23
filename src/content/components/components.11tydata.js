const todaysDate = new Date();

module.exports = {
  // layout: "layouts/component.njk", // Default layout for all components

  eleventyComputed: {
      section: "Components",
      permalink: (data) => {
          if (data.draft) { return false; }
          // Use existing permalink or default to file path stem
          return data.permalink || data.page.filePathStem + "/";
      },
  },
};