import React, { useState } from 'react';

import MoviesList from './components/MoviesList';

import './App.css';

function App() {
  const [movies, setMovies] = useState([]);


  async function fetchMoviesHandler() {

    const endpoint = 'https://swapi.dev/api/films/';
    const response = await fetch(endpoint);
    const data = await response.json();
    const ending = data.results

    // console.table(data.value);
    setMovies(ending)
  }

  return (
    <React.Fragment>

      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
      <MoviesList movies={movies} />
        </section>

    </React.Fragment>
  );
}

export default App;
