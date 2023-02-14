import React from 'react'
import Navbar from '../components/fragments/Navbar/Navbar.jsx'
import Hero from '../components/Hero/Hero.jsx'
import Intro from '../components/Intro/Intro.jsx'
import CtaOne from '../components/Cta_one/CtaOne.jsx'
import Menu from '../components/Menu/Menu.jsx'
import CtaTwo from '../components/Cta_two/CtaTwo.jsx'
import CtaThree from '../components/Cta_Three/CtaThree.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Testimonial from '../components/Testimonial/Testimonial.jsx'


const Home = () => {
  return (
    <div>
       <Navbar />
       <Hero />
       <Intro />
       <CtaOne />
       <Menu />
       <CtaTwo />
       <CtaThree />
       <Testimonial />
       <Footer />
    </div>
   
  )
}

export default Home
