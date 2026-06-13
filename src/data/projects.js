export const projects = [
  {
    id: "guide-homepage",
    featured: true,
    status: "active",
    name: {
      zh: "指路主页",
      en: "Guide Homepage",
    },
    description: {
      zh: "一个用于整理、展示和跳转到个人项目的中英双语主页。",
      en: "A bilingual homepage for organizing, presenting, and linking to personal projects.",
    },
    tech: ["React", "Vite", "GitHub Pages"],
    links: {
      demo: "https://xuan-tmp.github.io/guide-homepage/",
      repo: "https://github.com/Xuan-tmp/guide-homepage",
    },
  },
  {
    id: "X-MapEditor",
    featured: false,
    status: "active",
    name: {
      zh: "X-MapEditor",
      en: "X-MapEditor",
    },
    description: {
      zh: "一款开源且免费的本地运行的地图编辑器，支持以图片为底图创建可交互地图。用户可以在主地图上添加说明标记或子地图入口，并为每个入口设置文本、图标、悬浮说明和跳转目标。\n最新版本号：v0.102.1",
      en: "An open-source and free locally-run map editor that supports creating interactive maps using images as base maps. Users can add explanatory markers or submap entries on the main map, and set text, icons, hover descriptions, and jump targets for each entry. \nLatest version number: v0.102.1",
    },
    tech: ["Electron"],
    links: {
      demo: "https://github.com/Xuan-tmp/X-MapEditor/releases/tag/v0.102.1",
      repo: "https://github.com/Xuan-tmp/X-MapEditor",
    },
  },
];
