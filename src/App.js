import React, { useState, useEffect } from 'react'
import Guesses from './components/Guesses'
import Pictures from './components/Pictures'
import GuessInput from './components/GuessInput'
import './index.css'

let movies = []
let movie_data = require("./MovieList2.json")
for (let i = 0; i < movie_data.items.length; i++) {
  movies[i] = {id: movie_data.items[i].id, name: movie_data.items[i].fullTitle, year: movie_data.items[i].year};
}

const movie = movies[Math.floor(Math.random()*movies.length)]
console.log("Movie Name: ", movie.name)
const url = "https://imdb-api.com/API/FullCast/k_uyey9p71/" + movie.id
const img_url =   'https://kgsearch.googleapis.com/v1/entities:search?query=brad%20pitt&key=[YOUR_API_KEY]'

const addGuess = ({ id, guesses, setGuesses, num, setNum }) => {
  if (num > 5 || (num > 0 && guesses[guesses.length - 1].name === movie.name)) {
    return
  }
  if(id === movie.id) {
    let new_arr = guesses
    new_arr.push({ name: movie.name, year: movie.year, correct: true })
    setGuesses(new_arr)
  } else {
    let currMovie = movies.filter((movie) => movie.id === id)[0]
    let new_arr = guesses
    new_arr.push({ name: currMovie.name, year: currMovie.year, correct: false })
    if (num === 5) {
      new_arr.push({ name: movie.name, year: movie.year, correct: true })
    }
    setGuesses(new_arr)
  }
  setNum(num + 1)
}

const App = () => {
  const [num, setNum] = useState(0)
  const [guesses, setGuesses] = useState([])
  const [images, setImages] = useState([])
  useEffect(async () => {
    const data = await fetch(url)
    const json_data = await data.json()
    setImages(json_data.actors.slice(0, 6).map((actor) => actor.image))
  }, [])
  return (
    <div align='center'>
      <div align="center"><h1>Actordle</h1></div>
      <div style={{border: '0.5px solid white'}} />
      <br />
      <Guesses guesses={guesses} />
      <br />
      <br />
      <div style={{border: '0.5px solid white'}} />
      <br />
      <Pictures num={num} urls={images} />
      <GuessInput movies={movies} addGuess={addGuess} guesses={guesses} setGuesses={setGuesses} num={num} setNum={setNum} />
      <br />
    </div>
  )
}

export default App
