import React, { useEffect, useState } from 'react'
import Result from './Result'

const getResults = ({ term, setRes, movies }) => {
  setRes(movies.filter(movie => movie.name.toLowerCase().includes(term.toLowerCase())))
}

const useField = ({ value, setValue, type, setRes, movies }) => {
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
  const [value, setValue] = useState('')
  const guessInput = useField({ value, setValue, type: 'text', setRes: setResults, movies: movies })
  return (
    <div>
      <input style={{width: '730px'}} placeholder='Search for a movie' {...guessInput} />
      <br />
      {results.map ((result) => (
        <Result key={result.id} setValue={setValue} id={result.id} setResults={setResults} addGuess={addGuess} name={result.name} guesses={guesses} setGuesses={setGuesses} num={num} setNum={setNum} />
      ))}
    </div>
  )
}

export default GuessInput