import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import customer1 from '../../assets/images/customer1.jpeg';
import customer2 from '../../assets/images/customer2.jpeg';
import customer3 from '../../assets/images/customer3.jpeg';
import customer4 from '../../assets/images/customerRed.jpg';

const Testimonial = () => {
  const images = [customer1, customer2, customer3, customer4];

  const reviews = [
    {
      text: 'Awesome food, value for the money',
      color: '#eaf1ef',
      stars: 4,
    },
    {
      text: 'Great service and delicious food!',
      color: '#ffe6cc',
      stars: 5,
    },
    {
      text: 'The best restaurant in town!',
      color: '#eaf1ef',
      stars: 4,
    },
    {
      text: 'Awesome food, value for the money',
      color: '#eaf1ef',
      stars: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((activeIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [activeIndex, reviews.length]);

  const activeReview = reviews[activeIndex];
  const activeImage = images[activeIndex];


  return (
    <section className='testimonial__Section'>
      <div className='testimonial__Control'>
        <div className='testimonial__Header'>
          <h3 className='header__Intro' style={{
            fontSize: 'var(--text-md)',
            textAlign: 'center',
            alignItems: 'center',
            padding: 'var(--default)',
            lineHeight: 'var(--line-height-lg)',
          }}>
            Trusted by thousands of customers</h3>
        </div>

        <div className='testimonial__Content' style={{
          display: 'flex',
          width: '100%',
          gap: 'var(--gutter)',
          padding: 'var(--whitespace) var(--gutter)',
        }}>
          <div className='testimonial__Left' style={{ flexBasis: '40%' }}>
            <div className='left' style={{
              display: 'flex', flexDirection: 'column', gap: '20px',
              padding: 'var(--gutter) var(--gutter)',
            }}>
              <div className='first' style={{
                fontSize: '16px',
                textAlign: 'left',
                padding: '1rem',
                borderRadius: '10px',
                boxShadow: 'rgb(0 0 0 / 30%) 0px 12px 14px',
                lineHeight: 'var(--line-height-default)',
                width: 'max-content',
                backgroundColor: activeReview.color
              }}>
                {Array.from({ length: activeReview.stars }).map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} color='gold' />
                ))}
                <p>{activeReview.text}</p>
              </div>

              <div className='opposite' style={{
                fontSize: '18px',
                textAlign: 'left',
                marginLeft: 'auto',
                marginRight: '0',
                padding: '1rem',
                borderRadius: '10px',
                color: '#fff',
                boxShadow: 'rgb(0 0 0 / 30%) 0px 12px 14px',
                lineHeight: 'var(--line-height-default)',
                width: 'max-content',
                backgroundColor: 'var(--olive-drab)'
              }}>
                <FontAwesomeIcon icon={faStar} color='gold' />
                <FontAwesomeIcon icon={faStar} color='gold' />
                <FontAwesomeIcon icon={faStar} color='gold' />
                <FontAwesomeIcon icon={faStar} color='gold' />
                <p>Professionalism at it's peak!</p>
              </div>


              <div className='first' style={{
                fontSize: '18px',
                textAlign: 'left',
                padding: 'var(--default) var(--default)',
                borderRadius: '10px',
                boxShadow: 'rgb(0 0 0 / 30%) 0px 12px 14px',
                lineHeight: 'var(--line-height-default)',
                width: 'max-content',
                backgroundColor: activeReview.color
              }}>
                <FontAwesomeIcon icon={faStar} color='gold' />
                <FontAwesomeIcon icon={faStar} color='gold' />
                <FontAwesomeIcon icon={faStar} color='gold' />
                <FontAwesomeIcon icon={faStar} color='gold' />
                <p>Best customer service in the area 😊</p>
              </div>
            </div>

          </div>
          <div className='testimonial__Right'>
            <div className='right image' style={{
              position: 'relative'
            }}>
              <img src={activeImage} height={450} width={550}
                aria-hidden alt='happy customer dark'
                style={{
                  borderRadius: '25px',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />

              <div style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 'var(--gutter) var(--gutter)',


              }}>
                <FontAwesomeIcon
                  icon={faArrowCircleLeft}
                  fontSize='28px'
                  cursor='pointer'
                  onClick={() => setActiveIndex((activeIndex - 1 + reviews.length) % reviews.length)}
                />
                <FontAwesomeIcon
                  icon={faArrowCircleRight}
                  fontSize='28px'
                  cursor='pointer'
                  onClick={() => setActiveIndex((activeIndex + 1 + reviews.length) % reviews.length)}
                />
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
