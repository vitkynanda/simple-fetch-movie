import React from "react";

const Movie = (props) => {
  return (
    <div className="text-center p-5 rounded-lg bg-gray-50 m-5 shadow-lg">
      <p className="font-bold text-2xl">{props.title}</p>
      <p>{props.desc}</p>
      <p>{props.release}</p>
    </div>
  );
};

export default Movie;
