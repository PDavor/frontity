const settings = {
  name: "opcina-djurmanec",
  state: {
    frontity: {
      url: "http://opcinadjurmanec.local/",
      title: "Općina Đurmanec",
      description: "Službena stranica Općine Đurmanec",
    },
  },
  packages: [
    {
      name: "my-first-theme",
      state: {
        theme: {
          menu: [],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "http://opcinadjurmanec.local/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
