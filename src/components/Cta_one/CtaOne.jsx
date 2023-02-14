 import React from 'react'
 
 const CtaOne = () => {
   return (
     <section id='cta__one' className='Cta_Section_One'>
        <div className='CtaOne__Wrapper'>
            
        <img src="/src/assets/images/vegPlateImage (1).png" alt="ctaOne__Image" style={{
                    height: '500px',
                    width: '500px',
                    padding: '0',
                    margin: '0'
                }}/>
        
                
       
            <div className='ctaOne__Text'>
                 <h2 className='ctaOne__Title'>Fresh Vegetables Every Day</h2>
                <p className='ctaOne__Description'>We present various types of fresh vegetables which are taken directly
                from the farmer's garden especially for you.
                </p>
                <button className='hero__btn' type="button">Learn More</button>
            </div>
        </div>
        

      
     </section>
   )
 }
 
 export default CtaOne
 