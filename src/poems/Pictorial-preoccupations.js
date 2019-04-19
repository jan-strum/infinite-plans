import React from 'react'
import { Link } from 'react-router-dom'

const PictorialPreoccupations = ({ cursorVisibility }) => {
  return (
    <Link
      id={cursorVisibility}
      className="Pictorial-preoccupations link none"
      to="/"
    >
      <div className="vertically-centered">
        <p>Pictorial preoccupations</p>
        <p>cannot explain</p>
        <p>other surrogates</p>
        <p>for celibacy.</p>
        <br />
        <p>Spectral solicitude</p>
        <p>for faceless digits</p>
        <p>flashing its own</p>
        <p>disappearance</p>
        <p>into a clock</p>
        <p>that could not</p>
        <p>contain it.</p>
        <br />
        <p>Unfit fragment</p>
        <p>complaining: an</p>
        <p>alluvial deposit</p>
        <p>of bedclothes</p>
        <p>located four</p>
        <p>units down</p>
        <p>from the origin.</p>
      </div>
    </Link>
  )
}

export default PictorialPreoccupations
