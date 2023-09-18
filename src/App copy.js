import React, { useState, useCallback } from 'react';

import MoviesList from './components/MoviesList';

import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => { //here 'results" is a keyword FROM the json object, it's an array! could be an "object"? 
        // the "map" process means it's applying the below "key" renaming's to each object in the "results" array
        // is the below correct?
        // array = list = []
        // object = library = key:value = {}
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies); //this is loading the data into the 'state'
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }


  let content = <p>Found no movies.</p>; 
  // this is the bottom box, where all the info is. this is routing what to put in there, error, loading, or the money shot from above, etc.

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>

      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
      <p>BUTT</p>
    </React.Fragment>
  );
}

export default App;
