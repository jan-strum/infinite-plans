import React from 'react'
import { Link } from 'react-router-dom'

const IAmTheInheritor = ({ cursorVisibility }) => {
  return (
    <Link id={cursorVisibility} className='I-am-the-inheritor link none' to='/'>
      <div className='vertically-centered'>
        <p>
          I am the inheritor, but first must come to swear before the ghost.
          Screaming the secrets of immobile life, I find him surviving his own
          expiration. He lets me order his time with my explanations and hold in
          solution his nearest name. Now I feel sick. I avoid speech at all
          costs, like the nothing-box, and those who are spacious in the
          possession of dirt. I knock my head against a wall and he trickles
          down. He passes me by, crawling to the cross reading “Martyr’s
          Provisions,” coming caressingly close to my rhetoric. We understand,
          then—do we not? Who knows? But I am enjoying myself, and today it
          belongs to the cult of our relation, and to its preparatory silence.
        </p>
      </div>
    </Link>
  )
}

export default IAmTheInheritor
