import React from 'react'
import { Link } from 'react-router-dom'

const HuntersBehindClouds = ({ cursorVisibility }) => {
  return (
    <Link
      id={cursorVisibility}
      className="Hunters-behind-clouds link none"
      to="infinite-plans"
    >
      <p>Hunters behind clouds</p>
      <p>track unknown fevers</p>
      <p>
        <span className="hidden">they </span>would prefer to kill
      </p>
      <p>than to torment. Below,</p>
      <p>experts on leeches forgive</p>
      <p>and partake in strange possession</p>
      <p>
        <span className="hidden">they </span>make it up to the body
      </p>
      <p>by conjoining one and their.</p>
    </Link>
  )
}

export default HuntersBehindClouds
