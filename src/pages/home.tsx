import React from "react";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import { movies } from "../posts.data";
import { Link } from "react-router-dom";

export type MovieItem = {
  id?: number;
  title?: string;
  description?: string;
  rating?: number;
  image?: string;
};

const Home = () => {
  const navigate = useNavigate();

  const handleMoreDetails = (id: number) => {
    console.log(`Routing to details page with id ${id}`);
    navigate(`/details/${id}`);
  };

  return (
    <>
      <Navbar />
      <h1>View my blog posts below</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 10,
        }}
      >
        {movies.map((movie) => (
          <div key={movie.id} style={{ border: "1px solid black", padding: 5 }}>
            <img
              src={movie.image}
              alt="picture"
              style={{
                width: "100%",
                height: 500,
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
            <h1 style={{ fontSize: 15 }}>{movie.title}</h1>
            <p>{movie.description}</p>
            <Link to={`/details/${movie.id}`}>View More</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
