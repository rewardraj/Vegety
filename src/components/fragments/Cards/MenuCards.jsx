import React from 'react'

const MenuCards = (props) => {
  return (
    <>
    <div className='Card' style={{
        boxShadow: props.boxShadow || '0px 4px 6px rgba(0,0,0,0.1)',
        height: '300px',
        width: '300px',
        gap: '40px',
        borderRadius: props.borderRadius || '20px',
        backgroundColor: props.backgroundColor || 'white',
      }}>
        <div className='Card__Image'>
            <img src={props.image} alt="card__image" style={{
              width: props.imageSize || '100%',
              height: props.height ||  'auto',
              objectPosition: props.objectPosition || 'center',
              borderRadius: props.borderRadiusImage || '20px',
            }}/>
        </div>
        <div className='Card__Content' style={{
          display: 'flex',
        justifyContent: 'space-between',
          padding: '10px 10px',
        }}>
            <h3 className='Card__Title' style={{
              fontWeight: 'bold',
              fontSize: '14px',
              textAlign: 'left',
              padding: '10px',
              margin: '0',
              lineHeight: '1.3'
            }}>{props.title}</h3>
            <p className='Card__Price' style={{
              fontWeight: 'bold',
              margin: '0',
              color: '#64a22f'
            }}>${props.price}</p>
            <button style={{
                width: '20%',
                padding: '15px',
                marginLeft: '8px',
                backgroundColor: '#64a22f',
                color: '#fff',
                border: '0',
                borderRadius: '10px',
                fontWeight: 'bold',
                cursor: 'pointer',
                textAlign: 'center'
            }}>Cart</button>
        </div>
</div>



</>


      
  )
}

export default MenuCards
