import React from 'react'

const GuessBox = ({ name, year, correct }) => {
  console.log(name)
  return (
    <div align='center'>
      <div style={{ width: '750px', border: '0.5px solid white', padding: '12px', margin: '0.5em'}}>{name}&nbsp;</div>
    </div>
  )
}

export default GuessBox