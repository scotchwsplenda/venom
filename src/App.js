import React, { useState } from 'react';

import MoviesList from './components/MoviesList';

import './App.css';

function App() {
  const [movies, setMovies] = useState([]);


  async function fetchMoviesHandler() {
    const endpoint = '/data-api/rest/Person';
    console.log(endpoint)
    const response = await fetch(endpoint)
    // , {    headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'}});
    console.log(response)
    const data = await response.json();
    const ending = data.results
    console.log(data.value);
    console.log(data.results);
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
