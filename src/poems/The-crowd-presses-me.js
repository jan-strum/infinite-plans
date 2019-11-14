import React from 'react'
import { Link } from 'react-router-dom'

const TheCrowdPressesMe = ({ cursorVisibility }) => {
  return (
    <Link
      id={cursorVisibility}
      className='The-crowd-presses-me link none'
      to='/'
    >
      <div className='vertically-centered'>
        <p>The crowd presses me toward big</p>
        <p> doors in constant action. They</p>
        <p>open and close the interim called:</p>
        <p>“We shall look at it tomorrow.”</p>
        <p>I, chattering animal, had to show</p>
        <p>my teeth and go on, as though</p>
        <p>thinking of a song transposed</p>
        <p>in sleep an octave higher.</p>
      </div>
    </Link>
  )
}

export default TheCrowdPressesMe
