import React from 'react';
import Slideshow from '../fragments/Slideshow/Slideshow';

const CtaTwo = () => {
  const checkboxStyle = {
    margin: '0.4rem',
    height: '20px',
    width: '20px',
    accentColor: '#68bc45',
    
  };

  const labelStyle = {
    marginLeft: '0.4rem',
    fontSize: '1.2rem',
    color: '#333',
  };


  return (
    <section className="Cta_Section_One">
      <div className="CtaOne__Wrapper" style={{ position: 'relative' }}>
        <div className='slideshow__Wrapper' style={{ backgroundColor: '#e0f3e1', borderRadius: '50%', justifyContent: 'left', marginTop:'2rem' }}>
          <Slideshow height="400px" width="400px" />
        </div>

        <div className="ctaOne__Text cta__Two">
          <h2 className="ctaOne__Title">Cooked by the Best Chefs in the World!</h2>
          <p className="ctaOne__Description">Our best chefs are always on deck to
            cook your food, giving it a tasty and extraordinary finish.
          </p>
          <div className='label__Wrapper' style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" checked disabled style={checkboxStyle} />
              <label htmlFor="guarantee" style={labelStyle}>A guaranteed delicious meal</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" checked disabled style={checkboxStyle} />
              <label htmlFor="guarantee" style={labelStyle}>Hygienic Food</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" checked  disabled style={checkboxStyle} />
              <label htmlFor="guarantee" style={labelStyle}>Speedy Service</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaTwo;
