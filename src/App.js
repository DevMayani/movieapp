import { useEffect, useState } from 'react';

import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';


const API_URL = "https://www.omdbapi.com?apikey=b6003d8a";

const movie = {
  "title": "Amazing Spiderman Sydrome",
  "Year": "2015",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}


const App = () => {

  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();


    setMovies(data.Search);
  }

     useEffect(() => {
    searchMovies('Spiderman')
     }, []);


  return (
    <div className='app'>
     <h1>MovieLand</h1>
     <div className='search'>
       <input placeholder='Search for movies' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <img src={SearchIcon} alt='search' onClick={() => searchMovies(searchTerm)} />
     </div>

       {
        movies?.length > 0
        ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
        ) : (

          <div className='empty'>
            <h2>No movie found</h2>
          </div>
        )
       }


     
    </div>
  )
}




export default App