import React from 'react'
import { Link } from 'react-router-dom'

const AContinuousFlowOfIntroductions = ({ cursorVisibility }) => {
  return (
    <Link
      id={cursorVisibility}
      className={`a-continuous-flow-of-introductions link none`}
      to='/'
    >
      <div className='vertically-centered'>
        <div className='stanza'>
          <p className='quarter'>a continuous flow of introductions—</p>
          <p className='half'>the intoning children of the evicted</p>
          <p className='three-quarters'>—fellow-feeling—gave imitations</p>
          <p>of the bruising origin—</p>
        </div>
        <div className='stanza top-margin'>
          <p className='quarter'>its bare possibility—I became fief-holder</p>
          <p className='half'>when I loved—smiley to know the taste</p>
          <p className='three-quarters'>
            of it—and then put it off—for a little
          </p>
          <p>while—</p>
        </div>
        <div className='stanza top-margin'>
          <p className='quarter'>at the social function—a small committee</p>
          <p className='half'>made us a hereafter—that happy, belated,</p>
          <p className='three-quarters'>
            unattainable there—and set bedroom eyes
          </p>
          <p>already accustomed</p>
        </div>
        <div className='stanza top-margin'>
          <p className='quarter'>to not seeing</p>
          <p className='half'>first farewells</p>
          <p className='three-quarters'>lengthen fetters . . .</p>
          <p>words effuse:</p>
        </div>
        <div className='stanza top-margin'>
          <p className='quarter'>
            Well, well, there are no cliffs here, but you don’t mind if I sit
            down beside you, all the same,
          </p>
          <p className='half'>
            as I used to? Let’s just sit and talk quietly, so that displeasure
            should not be taken seriously.
          </p>
        </div>
      </div>
    </Link>
  )
}

export default AContinuousFlowOfIntroductions
