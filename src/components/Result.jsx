import React from 'react'

const Result = ({ id, name, addGuess, guesses, setGuesses, num, setNum }) => {
  const guess = () => {
    addGuess({ id, guesses, setGuesses, num, setNum })
  }
  return (
    <div>
      <p style={{cursor: 'pointer', color: 'white', fontFamily: 'serif', fontSize: '14pt'}} onClick={guess}>{name}</p>
    </div>
  )
}

export default Result