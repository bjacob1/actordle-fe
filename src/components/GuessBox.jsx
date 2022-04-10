import React from 'react'

const GuessBox = ({ name, year, correct }) => {
  console.log(name)
  // if(!correct) {
  //   return (
  //     <div align='center'>
  //       <div style={{ width: '750px', border: '0.5px solid white', padding: '0px', margin: '0.5em'}} align='center'>
  //         <p style={{color: 'white'}}>
  //           {name}&nbsp;<img width='10px' src='https://www.citypng.com/public/uploads/preview/transparent-handdrawn-doodle-red-x-close-icon-31631916723qjvbg7xy7u.png'/>
  //         </p>
  //       </div>
  //     </div>
  //   ) 
  // } else if(correct) {
  //   return (
  //     <div align='center'>
  //       <div style={{ width: '750px', border: '0.5px solid white', padding: '0px', margin: '0.5em'}} align='center'><p style={{color: 'white'}}>{name}&nbsp;</p></div>
  //     </div>
  //   )
  // }
  return (
    <div align='center'>
      <div style={{ width: '750px', border: '0.5px solid white', padding: '0px', margin: '0.5em'}} align='center'><p style={{color: 'white'}}>{name}&nbsp;</p></div>
    </div>
  )
}

export default GuessBox