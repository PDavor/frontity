const settings = {
  name: "opcina-djurmanec",
  state: {
    frontity: {
      url: "https://opcina.000webhostapp.com/",
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
          url: "https://opcina.000webhostapp.com/",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
