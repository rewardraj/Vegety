import React from 'react'
import Cards from '../fragments/Cards/Cards'

const Intro = () => {
  return (
    <section className='intro__Container'>
      <div className='intro__Text'>
        <h2 className='intro__Title'>Our Special Dish</h2>
        <p>Made with premium ingredients.</p>
      </div>

      <div className='Card__List'>
        <Cards 
        borderRadius='0' 
        boxShadow="none" 
        image='/src/assets/images/greenSalad.jpg'
        title="Green  Salad"
        description="A green salad filled with cabbage, 
        mustard greens and chicken pieces for a more delicious taste."
        />
        <Cards 
        boxShadow='0px 12px 14px rgba(0,0,0,0.3)' 
        image='/src/assets/images/beefSaladNew.jpeg'
        width='100%'
        height='340px'
        title="Beef Salad"
        description="A salad combined with a delicious cut of bacon, mixed with tasty
        and fresh sesame oil."
        />
        <Cards 
        borderRadius='0' 
        boxShadow="none"
        image='/src/assets/images/nutSalad.jpg'
        title="Nut Salad"
        description="The salad is mixed with various types of savory nuts so that it adds
        to a delicious and addictive taste."
        />
      </div>
      
    </section>

    
  )
}

export default Intro
