import React from "react";
import { useParams } from "react-router-dom";

function MoviesDetails() {
  const { movieId } = useParams();

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mt-5 mb-3">Movie Details</h1>
          <p className="text-center">Movie ID: {movieId}</p>
        </div>
      </div>
    </div>
  );
}

export default MoviesDetails;
