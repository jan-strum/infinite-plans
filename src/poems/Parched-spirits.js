import React from 'react'
import { Link } from 'react-router-dom'

const ParchedSpirits = ({ cursorVisibility }) => {
  return (
    <Link id={cursorVisibility} className="Parched-spirits link none" to="/">
      <div className="vertically-centered">
        <p>Parched spirits inhale them-</p>
        <p>selves for the sake</p>
        <p>of language.</p>
        <p>
          <span className="hidden">of language. </span>Dislocated
        </p>
        <p>life</p>
        <p>
          <span className="hidden">life </span>dwells in me as motion.
        </p>
        <br />
        <p>It psychologizes world</p>
        <p>when I expire You and</p>
        <p>god lets come to</p>
        <p>life</p>
        <p>
          <span className="hidden">life</span>–cracks open
        </p>
        <p>the crust of thinghood.</p>
        <br />
        <p>Only then was I</p>
        <p>hands in the dark</p>
        <p>encountering hands</p>
        <p>hold</p>
        <p>
          <span className="hidden">hold </span>up the world
        </p>
        <p>and touch of its skin.</p>
      </div>
    </Link>
  )
}

export default ParchedSpirits
