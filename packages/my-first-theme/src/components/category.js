// File: /packages/my-first-theme/src/components/list.js

import React, { useEffect } from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import Slider from "./Slider";
import FeaturedMedia from "./featured-media";
import dayjs from "dayjs";
const Category = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  console.log("data", data);
  const category = state.source.category[data.id];
  console.log("category", category);
  return (
    <>
      <Slider />
      {/* vijesti */}
      <div className="container py-4">
        <h2 className="mb-2 text-plava font-weight-bold">{category.name}</h2>
        {category.description && (
          <p
            className="mb-4 text-plava"
            dangerouslySetInnerHTML={{ __html: category.description }}
          />
        )}
        <div className="row">
          {data.items.map((item) => {
            const post = state.source[item.type][item.id];
            return (
              <div
                className="col-sm-12"
                key={item.id}
                style={{ marginBottom: "1rem" }}
              >
                <Link key={item.id} link={post.link}>
                  <div className="card">
                    <FeaturedMedia
                      id={post.featured_media}
                      style={{
                        height: " 300px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <p className="card-text">{post.title.rendered}</p>
                        </div>
                        <div className="col" style={{ textAlign: "end" }}>
                          <p className="card-text">
                            {dayjs(post.date).format("DD.MM.YYYY")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        {data.previous && (
          <button
            className="button"
            onClick={() => {
              actions.router.set(data.previous);
              window.scrollTo(0, 0);
            }}
          >
            &#171; Natrag
          </button>
        )}
        {data.next && (
          <button
            className="button"
            onClick={() => {
              actions.router.set(data.next);
              window.scrollTo(0, 0);
            }}
          >
            Naprijed &#187;
          </button>
        )}
      </div>
      {/* <Ostalo />
      <Izdvojeno /> */}
    </>
  );
};
export default connect(Category);
