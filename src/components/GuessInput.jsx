import React, { useState } from 'react'

let movies = []
let movie_data = require("../IMDB_Top250Movies.json")
for (let i = 0; i < movie_data.items.length; i++) {
  movies[i] = {id: movie_data.items[i].id, name: movie_data.items[i].fullTitle};
}

const getResults = ({ term, setRes }) => {
  setRes(movies.filter(movie => movie.name.toLowerCase().includes(term.toLowerCase())))
}

const useField = ({ type, setRes }) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
    if(event.target.value === '') {
      setRes([])
    }
    else {
      getResults({ term: event.target.value, setRes: setRes })
    }
  } 

  return {
    type, value, onChange
  }
}

// const fillField = ({ id, guessField }) => {
//   guessField.
// }

const GuessInput = () => {
  const inputStyle = {
    backgroundColor: '#242729',
    border: '0.5px solid white',
    padding: '15px',
    width: '630px',
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
  const guessInput = useField({ type: 'text', setRes: setResults })
  return (
    <div>
      <input style={inputStyle} placeholder='Search for a movie' {...guessInput} />&nbsp;<input style={buttonStyle} type='button' value='Submit' />
      <br /><br />
      {results.map ((result) => (
        <p key={result.id} style={{color: 'white', fontFamily: 'serif', fontSize: '14pt'}}>{result.name}</p>
      ))}
    </div>
  )
}

export default GuessInput