import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MovieItem } from "./home";
import { posts } from "../posts.data";

const Details = () => {
  const params = useParams();
  const { id } = params;

  const movie = posts.find((item) => item.id.toString() === id);

  return (
    <div>
      <img
        src={movie?.image}
        alt="picture"
        style={{
          width: "100%",
          height: 500,
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
      <h1>{movie?.title}</h1>
    </div>
  );
};

export default Details;
