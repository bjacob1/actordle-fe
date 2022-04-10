import React from 'react'
import GuessBox from './GuessBox'

const Guesses = ({ guesses }) => {
  let blanks = []
  for(let i = 0; i < 6 - guesses.length; i++) {
    blanks.push({ id: i })
  } 
  return (
    <div>
      {guesses.map((guess) => (
        <GuessBox key={guess.id} name={guess.name} year={guess.year} correct={guess.correct} />
      ))}
      {blanks.map((blank) => (
        <GuessBox key={blank.id} name={' '} />
      ))
      }
    </div>
  )
}

export default Guesses