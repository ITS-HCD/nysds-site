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

  // Third pass: Sort top-level pages & their children alphabetically by title
  Object.entries(sections).forEach(([sectionName, section]) => {
    const sectionSlug = sectionName.toLowerCase().replace(/\s+/g, "-");
    const sectionIndexUrl = `/${sectionSlug}/`;
    section.topLevel.sort((a, b) => {
      const aIsHeading = a.url === sectionIndexUrl;
      const bIsHeading = b.url === sectionIndexUrl;
      if (aIsHeading) return -1;
      if (bIsHeading) return 1;
      return (a.data.title || "").localeCompare(b.data.title || "");
    });
    section.all.forEach((page) => {
      page.children.sort((a, b) => (a.data.title || "").localeCompare(b.data.title || ""));
    });
  });

  return sections;
};