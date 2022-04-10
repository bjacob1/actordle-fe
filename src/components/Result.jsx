import React from 'react'

const Result = ({ id, name, addGuess, guesses, setGuesses, num, setNum }) => {
  const guess = () => {
    console.log(id)
    addGuess({ id, guesses, setGuesses, num, setNum })
  }
  return (
    <div>
      <p style={{color: 'white', fontFamily: 'serif', fontSize: '14pt'}} onClick={guess}>{name}</p>
    </div>
  )
}

export default Result