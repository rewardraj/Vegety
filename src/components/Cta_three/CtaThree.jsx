import React from 'react'

const CtaThree = () => {
  return (
    <section className='Cta__Three'>
      <div className='cta__ThreeWrapper'>
        <div className='input__Field'>
            <h3 className='input__Title'>Become a member and get an instant 50% discount</h3>
            <div className='button__InputField'>
                <input type="text" name="email" placeholder='Enter your email' />
                <button type="button">Sign up</button>
            </div>
            <p className='input__TextSmall'>I'm already a member</p>
            
        </div>
      </div>
    </section>
  )
}

export default CtaThree
