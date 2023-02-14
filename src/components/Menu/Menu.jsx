import React from 'react'
import MenuCards from '../fragments/Cards/MenuCards'

const Menu = () => {
  return (
        
   
    <div className='Menu__Wrapper'>
        <div className='Menu__intro__Text'>
            <h2 className='intro__Title'>Our Popular Menu</h2>
            <p>Made with premium ingredients.</p>
        </div>
      <MenuCards 
        image='/src/assets/images/chickenAvocado.jpeg'
        borderRadiusImage='25px'
        height='220px'
        title="Chicken Salad with Avocado Toast"
        price='10.80'
      />
      <MenuCards 
        image='/src/assets/images/tunaSalad.jpg'
        borderRadiusImage='25px'
        height='220px'
        title="Tuna Salad with Spicy Cucumber"
        price='12.60'
      />

        <MenuCards
            image='/src/assets/images/eggSalad.png'
            borderRadiusImage='25px'
            height='220px'
            title="Salted Egg Salad with Curry Sauce"
            price='16.75'
        />
        </div>
    //     <div>
    //     <button className='hero__btn' type="" style={{
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         margin: '0 auto',
    //     }}>See More</button>
    // </div>
    
        
    
     
   

    
    
  )
}

export default Menu
