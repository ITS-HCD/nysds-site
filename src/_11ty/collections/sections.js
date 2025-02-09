module.exports = function (collectionApi) {
  let sections = {};
  let childMap = {}; // Store child pages for fast lookup

  collectionApi.getAll().forEach((item) => {
    if (item.data.section) {
      let sectionName = item.data.section;

      // Initialize section if not already created
      if (!sections[sectionName]) {
        sections[sectionName] = [];
      }

      sections[sectionName].push(item);

      // Store child relationships
      if (item.data.parent) {
        if (!childMap[item.data.parent]) {
          childMap[item.data.parent] = [];
        }
        childMap[item.data.parent].push(item);
      }
    }
  });

  // Sort pages in each section by navOrder
  Object.keys(sections).forEach((section) => {
    sections[section].sort((a, b) => (a.data.navOrder || 99) - (b.data.navOrder || 99));
  });

  // Attach child relationships directly to each item
  Object.values(sections).forEach((pages) => {
    pages.forEach((page) => {
      page.children = (childMap[page.data.title] || []).sort((a, b) => (a.data.navOrder || 99) - (b.data.navOrder || 99));
    });
  });

  return sections;
};
