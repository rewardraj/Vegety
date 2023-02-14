import React from 'react'

const Cards = (props) => {
  return (
    <div className='Card__Wrapper'>
      <div className='Card' style={{
        boxShadow: props.boxShadow || '0px 4px 6px rgba(0,0,0,0.1)',
        height: '500px',
        width: '400px',
        gap: '40px',
        borderRadius: props.borderRadius || '20px',
        backgroundColor: props.backgroundColor || 'white',
      }}>
        <div className='Card__Image'>
            <img src={props.image} alt="card__image" style={{
              width: props.imageSize || '100%',
              height: props.height ||  'auto',
              objectPosition: props.objectPosition || 'center'
            }}/>
        </div>
        <div className='Card__Content' style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px 60px'
        }}>
            <h3 className='Card__Title'>{props.title}</h3>
            <p className='Card__Desc'
            style={{
              lineHeight: '1.5',
              wordBreak: 'break-word',
            }}
            >{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Cards
