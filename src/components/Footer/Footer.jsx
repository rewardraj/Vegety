import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className='footer__Wrapper'>
      <div className='social__Buttons'>
        <FontAwesomeIcon icon={faFacebook} color='#1877f2' size={'3x'}/>
        <FontAwesomeIcon icon={faInstagram} color='#e4405f' size={'3x'}/>
        <FontAwesomeIcon icon={faWhatsapp} color='#25D366' size={'3x'} /> 
        <FontAwesomeIcon icon={faYoutube} color='#ff0000' size={'3x'} /> 
      </div>
      <div className='addon__Links'>
        <p className='addOns'>Home |</p>
        <p className='addOns'>About Us |</p>
        <p className='addOns'>Menu |</p>
        <p className='addOns'>Blog |</p>
        <p className='addOns'>Contact</p>
      </div>
      <div className='appStore__Wrapper'>

      </div>
    </div>
  )
}

export default Footer
