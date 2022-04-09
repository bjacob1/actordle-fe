import React, { useState } from 'react'
import GuessBox from './components/GuessBox'
import Pictures from './components/Pictures'
import GuessInput from './components/GuessInput'
import './index.css'

const App = () => {
  const [pics, setPics] = useState(0)
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
      <Pictures num={5} />
      <GuessInput />
      <br />
    </div>
  )
}

export default App