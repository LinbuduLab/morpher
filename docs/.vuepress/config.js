module.exports = {
  title: "Linubudlab:TSMorpher",
  logo: "/media/logo.jpeg",
  description: "Dead simple TypeScript AST utilities built on top of ts-morph",
  themeConfig: {
    nav: [
      {
        text: "Packages",
        items: [
          { text: "Checker", link: "/checker-docs/" },
          { text: "Creator", link: "/creator-docs/" },
          { text: "Cleaner", link: "/cleaner-docs/" },
          { text: "Modifier", link: "/modifier-docs/" },
          { text: "Helper", link: "/helper-docs/" },
        ],
      },
      {
        text: "Learn ts-morph",
        link: "https://ts-morph.com",
      },
      {
        text: "GitHub",
        link: "https://github.com/LinbuduLab/morpher",
      },
    ],
    sidebar: "auto",
    algolia: {
      apiKey: "<API_KEY>",
      indexName: "<INDEX_NAME>",
    },
  },
  displayAllHeaders: true,
  lastUpdated: "Last Updated",
  nextLinks: false,
  prevLinks: false,
  editLinks: true,
  editLinkText: "Help me improve this page!",
  smoothScroll: true,
};
