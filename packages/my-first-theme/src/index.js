import Root from "./components";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";
import menuHandler from "./components/handlers/menu-handler";
export default {
  name: "opcina-djurmanec",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      sidebar: false,
      menuUrl: "glavni",
      leftUrl: "lijevi",
      footerUrl: "dno",
    },
  },
  actions: {
    theme: {
      toggleSidebar: () => {
        console.log("w");
      },
      beforeSSR: async ({ state, actions }) => {
        await actions.source.fetch(`/menu/${state.theme.menuUrl}/`);
        await actions.source.fetch(`/menu/${state.theme.leftUrl}/`);
        await actions.source.fetch(`/menu/${state.theme.footerUrl}/`);
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
    source: {
      handlers: [menuHandler],
    },
  },
};
