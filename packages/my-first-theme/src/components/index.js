// File: /packages/my-first-theme/src/components/index.js
import React, { useEffect } from "react";
import { connect, Global, css, Head } from "frontity";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import Dno from "./Dno";
import customCSS from "./style.css";
import Category from "./category";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  useEffect(() => {
    <script>
      {(function (d) {
        var s = d.createElement("script");
        s.setAttribute("data-account", "gf0cNVno4T");
        s.setAttribute("src", "https://accessibilityserver.org/widget.js");
        (d.body || d.head).appendChild(s);
      })(document)}
    </script>;
  }, []);
  return (
    <>
      <Head>
        <title>{state.frontity.title}</title>
        <meta name="description" content={state.frontity.description} />
        <html lang="hr" />
        <link rel="canonical" href={state.router.link} />
      </Head>
      <Global styles={css(bootstrap)} />
      <Global styles={css(customCSS)} />
      <Nav />
      <Switch>
        <List when={data.isHome} />
        <Category when={data.isCategory} />
        <Post when={data.isPost || data.isPage} />

        {/* <Page when={data.isPage} /> */}
      </Switch>
      <Dno />
    </>
  );
};

export default connect(Root);
