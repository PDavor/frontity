// File: /packages/my-first-theme/src/components/index.js
import React from "react";
import { connect, Global, css } from "frontity";
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";
import List from "./list";
import Post from "./post";
import Page from "./page";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import customCss from "./style.css";
import Nav from "./small/Nav";
import Slider from "./small/Slider";
import Vijesti from "./small/Vijesti";
import Ostalo from "./small/Ostalo";
import Izdvojeno from "./small/Izdvojeno";
import Dno from "./small/Dno";
import Sidebar from "./small/Sidebar";
const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <button onClick={actions.theme.toggleSidebar}>toggle</button>
      <Global styles={css(bootstrap)} />
      <Global styles={css(customCss)} />
      <Sidebar />
      <Nav />
      <Slider />
      <Vijesti />
      <Ostalo />
      <Izdvojeno />
      <Dno />
      {/* <h1>Hello Frontity</h1>
      <p>Current URL: {state.router.link}</p>
      <nav>
        <Link link="/">Home</Link>
        <br />
        <Link link="/page/2">More posts</Link>
        <br />
        <Link link="/about-us">About Us</Link>
      </nav>
      <hr />
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
