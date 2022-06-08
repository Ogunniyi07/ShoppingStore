import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import {React, useState} from 'react';

function Announce() {

    const[announceStyle, setAnnounceStyle] = useState('bg-[#8a4af3] font-bold text-white flex items-center justify-center')
  
    const handleClose = () => {
      setAnnounceStyle(announceStyle + " hidden")
    }
    return (
    <div className={announceStyle}>
        <h2>Hurry up it's 40% off now&nbsp;&nbsp;</h2>
      <FontAwesomeIcon icon={faClose} className='cursor-pointer' onClick={handleClose}/>
    </div>
  )
}

export default Announce;