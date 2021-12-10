// File: /packages/my-first-theme/src/components/list.js

import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import Slider from "./Slider";
import Ostalo from "./Ostalo";
import Izdvojeno from "./Izdvojeno";
const List = ({ state }) => {
  const data = state.source.get(state.router.link);
  console.log("post data", data);
  {
    /* <Vijesti /> */
  }
  {
    /* <Ostalo /> */
  }
  {
    /* <Izdvojeno /> */
  }
  return (
    <>
      <Slider />
      {/* vijesti */}
      <div className="container py-4">
        <h2 className="mb-4 text-plava font-weight-bold">VIJESTI</h2>
        <div className="row">
          {data.items.slice(0, 6).map((item) => {
            const post = state.source[item.type][item.id];
            return (
              <div
                className="col-sm-4"
                key={item.id}
                style={{ marginBottom: "1rem" }}
              >
                <Link key={item.id} link={post.link}>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src="http://placehold.jp/200x150.png"
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <p className="card-text">{post.title.rendered}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Ostalo />
      <Izdvojeno />
    </>
  );
};
export default connect(List);
