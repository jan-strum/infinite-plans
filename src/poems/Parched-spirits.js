import React from 'react'
import { Link } from 'react-router-dom'

const ParchedSpirits = ({ cursorVisibility }) => {
  return (
    <Link id={cursorVisibility} className='Parched-spirits link none' to='/'>
      <div className='vertically-centered'>
        <p>Parched spirits inhale themselves for the sake of language.</p>
        <p>Dislocated life dwells in me as motion.</p>
        <br />
        <p>It psychologizes world</p>
        <p>when I expire you</p>
        <p>and let come to life</p>
        <p>the crust of thinghood.</p>
        <br />
        <p>Only then was I</p>
        <p>hands in the dark</p>
        <p>encountering hands</p>
        <p>that hold up the world</p>
        <p>and touch of its skin.</p>
      </div>
    </Link>
  )
}

export default ParchedSpirits
