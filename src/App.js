import React from 'react'
import GuessBox from './components/GuessBox'
import Picture from './components/Picture'
import Pictures from './components/Pictures'
import GuessInput from './components/GuessInput'
import './index.css'

const App = () => {
  return (
    <div align='center'>
      <div align="center"><h1 style={{fontFamily: 'serif', fontSize: '40px', color: 'white'}}>Actordle</h1></div>
      {/* <hr style={{ height: '2px'}} /> */}
      <div style={{border: '0.5px solid white'}} />
      <br />
      <GuessBox />
      <GuessBox />
      <GuessBox />
      <GuessBox />
      <GuessBox />
      <GuessBox />
      <br />
      <br />
      <div style={{border: '0.5px solid white'}} />
      <br />
      <Pictures />
      <GuessInput />
      {/* <img style={{width: '150px'}} alt='Dwayne Johnson' src=''/> */}
      <br />
    </div>
  )
}

export default App