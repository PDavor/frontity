// featured-media.js

import React from "react";
import { connect, styled } from "frontity";
import Image from "react-bootstrap/Image";
const FeaturedMedia = ({ state, id, style }) => {
  const media = state.source.attachment[id];

  if (!media) return null;

  const srcset = Object.values(media.media_details.sizes)
    // Get the url and width of each size.
    .map((item) => [item.source_url, item.width])
    // Recude them to a string with the format required by `srcset`.
    .reduce(
      (final, current, index, array) =>
        final.concat(
          `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
        ),
      ""
    );

  return (
    <Image
      alt={media.title.rendered}
      src={media.source_url}
      // srcSet={srcset}
      style={style}
    />
  );
};

export default connect(FeaturedMedia);
