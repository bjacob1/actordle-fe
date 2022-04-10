import React from 'react'
import '../style.css'

const Result = ({ id, name, addGuess, guesses, setGuesses, num, setNum, setValue, setResults }) => {
  const guess = () => {
    addGuess({ id, guesses, setGuesses, num, setNum })
    setValue('')
    setResults([])
  }
  return (
    <div>
      <p class="result" onClick={guess}>{name}</p>
    </div>
  )
}

export default Result