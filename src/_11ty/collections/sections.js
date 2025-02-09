module.exports = function (collectionApi) {
  let sections = {};
  let childMap = {}; // Store children for quick lookup

  // First pass: Organize pages by section
  collectionApi.getAll().forEach((item) => {
    if (item.data.section) {
      let sectionName = item.data.section;

      if (!sections[sectionName]) {
        sections[sectionName] = { all: [], topLevel: [] };
      }

      sections[sectionName].all.push(item);

      // If the page has a parent, store it in childMap
      if (item.data.parent) {
        if (!childMap[item.data.parent]) {
          childMap[item.data.parent] = [];
        }
        childMap[item.data.parent].push(item);
      } else {
        sections[sectionName].topLevel.push(item); // ✅ Store top-level pages (no parent)
      }
    }
  });

  // Second pass: Attach children to their respective parent pages
  Object.values(sections).forEach((section) => {
    section.all.forEach((page) => {
      page.children = childMap[page.data.title] || [];
    });
  });

  // Third pass: Sort top-level pages & their children by `navOrder`
  Object.values(sections).forEach((section) => {
    section.topLevel.sort((a, b) => (a.data.navOrder || 99) - (b.data.navOrder || 99));
    section.all.forEach((page) => {
      page.children.sort((a, b) => (a.data.navOrder || 99) - (b.data.navOrder || 99));
    });
  });

  return sections;
};