// File: /packages/my-first-theme/src/components/list.js

import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import Slider from "./Slider";
import Ostalo from "./Ostalo";
import Izdvojeno from "./Izdvojeno";
const List = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const Html2React = libraries.html2react.Component;

  return (
    <>
      {/* vijesti */}
      <div className="container py-4">
        <h2 className="mb-4 text-plava font-weight-bold">Ostale vijesti</h2>
        <div className="row">
          {data.items.slice(0, 6).map((item) => {
            const post = state.source[item.type][item.id];
            const exc = post.excerpt.rendered
              .replace(/<\/?[^>]+(>|$)/g, "")
              .slice(0, 90);
            console.log("posts", post);
            return (
              <div
                className="col-sm-4"
                key={item.id}
                style={{ marginBottom: "1rem" }}
              >
                <Link key={item.id} link={post.link}>
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text">{post.title.rendered}</p>
                      {post.excerpt && (
                        <div className="card-text">
                          <Html2React html={exc.slice(0, -1) + ".."} />
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      {/* <Ostalo />
      <Izdvojeno /> */}
    </>
  );
};
export default connect(List);
