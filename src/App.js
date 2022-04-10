import React, { useState } from 'react'
import Guesses from './components/Guesses'
import Pictures from './components/Pictures'
import GuessInput from './components/GuessInput'
import './index.css'

let movies = []
let movie_data = require("./IMDB_Top250Movies.json")
for (let i = 0; i < movie_data.items.length; i++) {
  movies[i] = {id: movie_data.items[i].id, name: movie_data.items[i].fullTitle, year: movie_data.items[i].year};
}

const movie = { id: 0, name: 'The Batman', year: 2022}

const addGuess = ({ id, guesses, setGuesses, num, setNum }) => {
  if(id === movie.id) {
    let new_arr = guesses
    new_arr.push({ name: movie.name, year: movie.year, correct: true })
    setGuesses(new_arr)
  } else {
    let currMovie = movies.filter((movie) => movie.id === id)[0]
    let new_arr = guesses
    new_arr.push({ name: currMovie.name, year: currMovie.year, correct: false })
    setGuesses(new_arr)
  }
  setNum(num + 1)
}

const App = () => {
  const [num, setNum] = useState(0)
  const [guesses, setGuesses] = useState([])
  return (
    <div align='center'>
      <div align="center"><h1 style={{fontFamily: 'serif', fontSize: '40px', color: 'white'}}>Actordle</h1></div>
      <div style={{border: '0.5px solid white'}} />
      <br />
      <Guesses guesses={guesses} />
      <br />
      <br />
      <div style={{border: '0.5px solid white'}} />
      <br />
      <Pictures num={num} />
      <GuessInput movies={movies} addGuess={addGuess} guesses={guesses} setGuesses={setGuesses} num={num} setNum={setNum} />
      <br />
    </div>
  )
}

export default App