import React from 'react'
import { Link } from 'react-router-dom'

const ByItselfTime = ({ cursorVisibility }) => {
  return (
    <Link id={cursorVisibility} className="By-itself-time link none" to="/">
      <div className="stanza">
        <p>By itself, time</p>
        <p>cannot conceive</p>
        <p>smells up to heaven</p>
        <p>a soap box.</p>
      </div>
      <div className="stanza">
        <p>Lay home to him</p>
        <p>an idle tongue.</p>
        <p>The glass upon our dance</p>
        <p>sets a blister there.</p>
      </div>
      <div className="stanza">
        <p>This physic</p>
        <p>but prolongs</p>
        <p>your sickly days</p>
        <p>thunder in the index.</p>
      </div>
      <div className="stanza">
        <p>Heaven’s face does glow</p>
        <p>answered by the doctrine itself</p>
        <p>is thought-sick at the act:</p>
        <p>have you eyes without feeling?</p>
      </div>
    </Link>
  )
}

export default ByItselfTime
