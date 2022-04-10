import React from 'react'
import Picture from './Picture'

const Pictures = ({ num, urls }) => {
  return (
    <div>
      <Picture show={0 <= num} url={urls[0]} />
      <Picture show={1 <= num} url={urls[1]} />
      <Picture show={2 <= num} url={urls[2]} />
      <Picture show={3 <= num} url={urls[3]} />
      <Picture show={4 <= num} url={urls[4]} />
      <Picture show={5 <= num} url={urls[5]} />
    </div>
  )
}

export default Pictures