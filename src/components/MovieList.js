import React from "react";
import Movie from "./Movie.js";

const MovieList = (props) => {
  return (
    <div className="w-3/4 m-auto md:w-1/2">
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          desc={movie.desc}
          release={movie.releaseDate}
        />
      ))}
    </div>
  );
};

export default MovieList;
