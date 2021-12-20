// File: /packages/my-first-theme/src/components/index.js
import React from "react";
import { connect, Global, css } from "frontity";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";
import Page from "./page";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Nav";
import Dno from "./Dno";
import customCSS from "./style.css";
const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global styles={css(bootstrap)} />
      <Global styles={css(customCSS)} />
      <Nav />
      <Switch>
        <List when={data.isArchive} />
        <Post when={data.isPost} />
        <Page when={data.isPage} />
      </Switch>
      <Dno />

      {/* <h1>Hello Frontity</h1>
      <p>Current URL: {state.router.link}</p> */}
      {/* <nav>
        <Link link="/">Home</Link>
        <br />
        <Link link="/page/2">More posts</Link>
        <br />
        <Link link="/about-us">About Us</Link>
      </nav> */}
      {/* <hr />
      <main>
        <Switch>
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
        </Switch>
      </main> */}
    </>
  );
};

export default connect(Root);
