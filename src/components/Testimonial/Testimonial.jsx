import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import happyCustomer1 from '../../assets/images/customerRed.jpg';

const Testimonial = () => {
  return (
    <section className='testimonial__Control'>
      <div className='testimonial__Header'>
        <h3 className='header__Intro' style={{
          fontSize: 'var(--text-md)',
          textAlign: 'left',
          fontWeight: '700',
          padding: 'var(--gutter) var(--gutter)',
          lineHeight: 'var(--line-height-default)',
          width: 'max-content'
        }}>Trusted by thousands <br /> of customers</h3>
      </div>
      <div className='testimonial__Content' style={{
        display: 'flex',
        width: '100%',
        gap: 'var(--gutter)',
      }}>
        <div className='testimonial__Left' style={{flexBasis: '40%'}}>
          <div className='left' style={{display: 'flex', flexDirection:'column', gap:'20px'}}>
            <div className='first' style={{
              fontSize: 'var(--text-sm)',
              textAlign: 'left',
              padding: 'var(--default) var(--gutter)',
              borderRadius: '10px',
              boxShadow: 'rgb(0 0 0 / 30%) 0px 12px 14px',
              lineHeight: 'var(--line-height-default)',
              width:'max-content',
              backgroundColor: '#eaf1ef' 
            }}>
              <FontAwesomeIcon  icon={faStar} color='gold' />
              <FontAwesomeIcon  icon={faStar} color='gold' />
              <FontAwesomeIcon  icon={faStar} color='gold' />
              <FontAwesomeIcon  icon={faStar} color='gold' />
              <p>"Awesome food, value for the money"</p>
            </div>

            <div className='opposite' style={{
              fontSize: 'var(--text-sm)',
              textAlign: 'left',
              marginLeft: 'auto',
              marginRight: '0',
              padding: 'var(--gutter) var(--gutter)',
              borderRadius: '10px',
              boxShadow: 'rgb(0 0 0 / 30%) 0px 12px 14px',
              lineHeight: 'var(--line-height-default)',
              width:'max-content',
              backgroundColor: '#eaf1ef' 
            }}>
              <FontAwesomeIcon  icon={faStar} color='gold' />
              <FontAwesomeIcon  icon={faStar} color='gold' />
              <FontAwesomeIcon  icon={faStar} color='gold' />
              <FontAwesomeIcon  icon={faStar} color='gold' />
              <p>"Awesome food, value for the money"</p>
            </div>
            

            <div className='first' style={{
              fontSize: 'var(--text-sm)',
              textAlign: 'left',
              padding: 'var(--gutter) var(--gutter)',
              borderRadius: '10px',
              boxShadow: 'rgb(0 0 0 / 30%) 0px 12px 14px',
              lineHeight: 'var(--line-height-default)',
              width:'max-content',
              backgroundColor: '#eaf1ef' 
            }}>
              <FontAwesomeIcon  icon={faStar} color='gold' />
              <FontAwesomeIcon  icon={faStar} color='gold' />
              <FontAwesomeIcon  icon={faStar} color='gold' />
              <FontAwesomeIcon  icon={faStar} color='gold' />
              <p>"Awesome food, value for the money"</p>
            </div>
          </div>
          
        </div>
        <div className='testimonial__Right'>
          <div className='right image'>
            <img src={happyCustomer1} height={450} width={600} aria-hidden alt='happy customer dark'/>
          </div>
          <div className='left top'></div>
          <div className='left bottom'></div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
