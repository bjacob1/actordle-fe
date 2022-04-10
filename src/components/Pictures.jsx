import React from 'react'
import Picture from './Picture'

const Pictures = ({ num, urls }) => {
  console.log(urls)
  // const urls = [
  //   'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/a7xecb3xykwbkhg4g18k',
  //   'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/a7xecb3xykwbkhg4g18k',
  //   'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/a7xecb3xykwbkhg4g18k',
  //   'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/a7xecb3xykwbkhg4g18k',
  //   'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/a7xecb3xykwbkhg4g18k',
  //   'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/a7xecb3xykwbkhg4g18k'
  // ]
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