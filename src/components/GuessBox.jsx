import React from 'react'

const GuessBox = ({ name, year, correct, next }) => {
  if(next !== undefined && next === true) {
    return (
      <div align='center'>
        <div style={{ width: '50%', border: '1.9px solid white', padding: '0px', margin: '0.5em'}} align='center'><p style={{color: 'white'}}>{name}&nbsp;</p></div>
      </div>
    )
  }
  if(correct === undefined) {
    return (
      <div align='center'>
        <div class="guess" align='center'><p style={{color: 'white'}}>{name}&nbsp;</p></div>
      </div>
    )
  }
  else if(correct) {
    return (
      <div align='center'>
        <div class="guess" style={{ backgroundColor: 'green', width: '50%', border: '0.5px solid green', padding: '0px', margin: '0.5em'}} align='center'><p style={{color: 'white'}}>{name}&nbsp;</p></div>
      </div>
    )
  } else {
    return (
      <div align='center'>
        <div class="guess" align='center'><p style={{color: 'white'}}>{name}&nbsp;&nbsp;<font color='red'><b>X</b></font></p></div>
      </div>
    )
  }
}

export default GuessBox