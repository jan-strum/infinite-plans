import React from 'react'
import { Link } from 'react-router-dom'

const PictorialPreoccupations = ({ cursorVisibility }) => {
  return (
    <Link
      id={cursorVisibility}
      className='Pictorial-preoccupations link none'
      to='/'
    >
      <div className='vertically-centered'>
        <p>Pictorial preoccupations</p>
        <p>cannot explain</p>
        <p>other surrogates</p>
        <p>for celibacy.</p>
      </div>
    </Link>
  )
}

export default PictorialPreoccupations
