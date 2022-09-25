import './Footer.css'

import { ReactComponent as NextIcon } from '../assets/PreviousIcon.svg'
import { ReactComponent as PauseIcon } from '../assets/PauseIcon.svg'
import { ReactComponent as PlayIcon } from '../assets/PlayIcon.svg'
import { ReactComponent as PreviousIcon } from '../assets/NextIcon.svg'
import React from 'react'

const Footer = () => {
  const [isPlaying, setPlaying] = React.useState(false);
  const handleClick = (value) => {
    setPlaying(value);
  }
  return (
    <div className='footer-container'>
      <div className='player-control'>
        <PreviousIcon width={'32px'} />
        {isPlaying?<PauseIcon onClick={() => { handleClick(false) }} width={'32px'} />:<PlayIcon onClick={() => { handleClick(true) }} width={'32px'} />
        }

        <NextIcon width={'32px'} />
      </div>
    </div>
  )
}

export default Footer