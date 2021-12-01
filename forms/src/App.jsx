import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { MoviesList } from './MoviesList'
// import { uuid } from 'uuidv4';

const moviesData = [
  {
    "_id": "1ae23ef1",
    "title": "The Godfather",
    "director": "Francis Coppola",
    "hasOscars": true,
    "IMDBRating": 9.2
  },
  {
    "_id": "1ae23ef2",
    "title": "Star Wars",
    "director": "George Lucas",
    "hasOscars": true,
    "IMDBRating": 8.7
  },
  {
    "_id": "1ae23ef3",
    "title": "The Shawshank Redemption",
    "director": "Frank Darabont",
    "hasOscars": false,
    "IMDBRating": 9.3
  },
  {
    "_id": "1ae23ef4",
    "title": "Jurassic Park",
    "director": "Steven Spielberg",
    "hasOscars": false,
    "IMDBRating": 8.0
  },
  {
    "_id": "1ae23ef5",
    "title": "Sharknado",
    "director": "Anthony C. Ferrante",
    "hasOscars": false,
    "IMDBRating": 5.2
  },
  {
    "_id": "1ae23ef6",
    "title": "Titanic",
    "director": "James Cameron",
    "hasOscars": true,
    "IMDBRating": 8.9
  }
]

function App() {

  const [movies, setMovies] = useState(moviesData);

  const [title, setTitle] = useState('')
  const [director, setDirector] = useState('')
  const [hasOscars, setHasOscars] = useState(false)
  const [IMDBRating, setIMDBRating] = useState(0)

  const addMovie = () => {
    const newMovie = {
      "_id": "1ae2fdjer",
      "title": "Interstellar",
      "director": "Christopher Nolan",
      "hasOscars": true,
      "IMDBRating": 8.6
    }
    // update the state of movies
    // movies.push(newMovie) => don't update the state directly ❌
    // setMovies([newMovie, ...movies])
    setMovies(movies => [newMovie, ...movies])
    // alternative:
    // const moviesCopy = movies.slice()
    // moviesCopy.unshift(newMovie)
    // setMovies(moviesCopy)
  }


  // using index as a value for the key prop is bad
  const moviesList = movies.map(movie => (<h3 key={movie._id}>{movie.title}</h3>))

  console.log(moviesList)

  const handleSubmit = event => {
    // we want to prevent the default behaviour of the html form
    event.preventDefault()
    // console.log(title, director, hasOscars, IMDBRating)
    const newMovie = { title, director, hasOscars, IMDBRating, _id: 'fjkdl83902' }
    console.log(newMovie)
    // setMovies([newMovie, ...movies])
    setMovies(movies => [newMovie, ...movies])
    // reset the form
    setTitle('')
    setDirector('')
    setHasOscars(false)
    setIMDBRating(0)
  }

  const handleTitleChange = event => {
    // console.log('change')
    // change the state of title
    // console.log(event.target.value)
    setTitle(event.target.value)
  }

  const handleDirectorChange = event => {
    setDirector(event.target.value)
  }

  const handleHasOscarsChange = event => {
    setHasOscars(event.target.checked)
  }
  const handleIMDBRatingChange = event => {

    setIMDBRating(event.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies App 🍿 🎥</h1>
        {/* <button onClick={addMovie}>Add the movie Interstellar</button> */}
        {/* {movies.map(movie => (<h3>{movie.title}</h3>))} */}
        {/* {moviesList} */}

        <form onSubmit={handleSubmit}>
          <label htmlFor="">Title: </label>
          {/* you can also define the function directly here */}
          {/* <input type="text" value={title} onChange={e => setTitle(e.target.value)} /> */}
          <input type="text" value={title} onChange={handleTitleChange} />

          <label htmlFor="">Director: </label>
          <input type="text" value={director} onChange={handleDirectorChange} />

          <label htmlFor="">Oscars: </label>
          <input type="checkbox" checked={hasOscars} onChange={handleHasOscarsChange} />

          <label htmlFor="IMDBRating">Rating: </label>
          <input type="number" value={IMDBRating} onChange={handleIMDBRatingChange} />

          <button type='submit'>Add this movie</button>
        </form>


        <MoviesList list={movies} />
      </header>
    </div>
  )
}

export default App
