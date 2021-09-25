import MovieList from "./components/MovieList";
import { useState, useEffect, useCallback } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

const TestSkeleton = styled(Skeleton)`
  display: block !important;
  margin: auto;
  margin-top: 10px;
  height: 200px;
  width: 600px !important;

  @media (max-width: 768px) {
    height: 300px;
    width: 300px !important;
  }
`;

function App() {
  const [dataApi, setDataApi] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("https://swapi.dev/api/films/");
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      const transformDataApi = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          desc: `${movie.opening_crawl.slice(0, 300)} ...`,
          releaseDate: movie.release_date,
        };
      });
      setDataApi(transformDataApi);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  console.log(dataApi);
  return (
    <div className="container text-center">
      <h1 className="font-bold text-3xl mt-5">Movies</h1>
      {!isLoading && !error ? (
        <MovieList movies={dataApi} />
      ) : !isLoading && error ? (
        <p className="text-red-500 font-semibold p-8 rounded-md bg-red-300 m-auto w-96 ">
          {error}
        </p>
      ) : (
        <div>
          <TestSkeleton
            className="test"
            // style={{ display: "block", margin: "auto", marginTop: "15px" }}
            count={6}
          />
        </div>
      )}
    </div>
  );
}

export default App;
