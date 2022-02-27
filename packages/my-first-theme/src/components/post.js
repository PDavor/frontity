// File: /packages/my-first-theme/src/components/post.js

import React from "react";
import { connect } from "frontity";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import dayjs from "dayjs";
import { Col } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import FeaturedMedia from "./featured-media";

const Post = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  const formattedDate = dayjs(post.date).format("DD.MM.YYYY");
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="my-4">{post.title.rendered}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>Objavljeno: {formattedDate}</span>
          <span className="mx-4">Autor: {author.name}</span>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          {post.categories?.map((category) => {
            const cat = state.source.category[category];
            return (
              <Badge key={cat.id} href={cat.link}>
                {cat.name}
              </Badge>
            );
          })}
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <FeaturedMedia
          id={post.featured_media}
          style={{
            display: "block",
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
          }}
        />
      </Row>
      <Row className="mt-4">
        <Col>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </Col>
      </Row>
    </Container>
  );
};

export default connect(Post);
