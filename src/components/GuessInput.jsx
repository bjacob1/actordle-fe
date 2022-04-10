import React, { useState } from 'react'
import Result from './Result'

const getResults = ({ term, setRes, movies }) => {
  setRes(movies.filter(movie => movie.name.toLowerCase().includes(term.toLowerCase())))
}

const useField = ({ type, setRes, movies }) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
    if(event.target.value === '') {
      setRes([])
    }
    else {
      getResults({ term: event.target.value, setRes: setRes, movies: movies })
    }
  } 

  return {
    type, value, onChange
  }
}

const GuessInput = ({ movies, addGuess, guesses, setGuesses, num, setNum }) => {
  const inputStyle = {
    backgroundColor: '#242729',
    border: '0.5px solid white',
    padding: '15px',
    // width: '630px',
    width: '750px',
    color: 'white',
    size: '20',
    fontSize: '14pt'
  }
  const buttonStyle = {
    border: 'none',
    backgroundColor: '#324aa8',
    padding: '14px 28px',
    fontSize: '18px',
    fontWeight: 'normal',
    color: 'white',
    cursor: 'pointer',
    height: '54px',
    fontFamily: 'serif'
  }
  const [results, setResults] = useState([])
  const guessInput = useField({ type: 'text', setRes: setResults, movies: movies })
  return (
    <div>
      <input style={inputStyle} placeholder='Search for a movie' {...guessInput} />
      <br />
      {results.map ((result) => (
        <Result key={result.id} id={result.id} addGuess={addGuess} name={result.name} guesses={guesses} setGuesses={setGuesses} num={num} setNum={setNum} />
        // <p key={result.id} style={{color: 'white', fontFamily: 'serif', fontSize: '14pt'}} onClick={guess}>{result.name}</p>
      ))}
    </div>
  )
}

export default GuessInput