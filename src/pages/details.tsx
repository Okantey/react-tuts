import { useParams } from "react-router-dom";
import { movies } from "../posts.data";

const Details = () => {
  const params = useParams();
  const { id } = params;

  const movie = movies.find((item) => item.id.toString() === id);
  console.log(movie);
  return (
    <div>
      <img src={movie?.image} style={{ width: 400 }} alt="movie-picture" />
      <h1>{movie?.title}</h1>
      <p>{movie?.description}</p>
      <p>{movie?.rating}</p>
    </div>
  );
};

export default Details;
