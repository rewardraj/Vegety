import React from 'react'

const Hero = () => {
  return (
    <header className='hero__Wrapper'>
        <section className='hero__Section'>
        <div className='hero__Text'>
            <h1 className='hero__Title'>Healthy food to <br/> live a <span>Healthier</span> life <br/> in the future</h1>
             <p>Enjoy a healthy life by eating healthy foods that <br/> have extraordinary flavors 
            that make your life <br/> healthier
            today and in the future.
            </p>
            <button className='hero__btn' type="button">Get Started</button>
        </div>

        <div className='hero__ImageWrapper'>
            <img className='hero__Image' src="/src/assets/images/heroImage.png" alt="hero__Image" />
        </div>
        
    </section>
    </header>
    
  )
}

export default Hero
