import React from 'react'

const Picture = ({ show, url }) => {
  const style = {
    width: '118px',
    padding: '5px'
  }
  if(show) {
    style.opacity = '1'
  } else {
    style.opacity = '0'
  }

  return (
    <img style={style} src={url} alt={'Actor'} />
  )
}

export default Picture