import React from "react";
import { Link } from "react-router-dom";

function Movies() {
  const moviesList = [
    {
      id: 1,
      title: "movie1",
    },
    {
      id: 2,
      title: "movie2",
    },
    {
      id: 3,
      title: "movie3",
    },
  ];

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mt-5 mb-3">Movies</h1>
          {moviesList.map((movie) => (
            <p key={movie.id} className="text-center">
              <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                {movie.title}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
