// File: /packages/my-first-theme/src/components/post.js

import React from "react";
import { connect } from "frontity";

const Post = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];

  return (
    <>
      <div className="container">
        <h1 className="my-4">{post.title.rendered}</h1>
        <span className="mb-4">Objavljeno: {post.date}</span>

        <span className="mb-4">Autor: {author.name}</span>
      </div>
      <div className="container">
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </>
  );
};

export default connect(Post);
