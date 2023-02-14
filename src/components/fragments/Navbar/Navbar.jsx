import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { RiMenu3Fill } from 'react-icons/ri'
import { HiOutlineShoppingCart } from 'react-icons/hi'




const Navbar = () => {
    
  return (
    <section className='header__Main'>
    <div className='navbar__Container'>
    
        <div className='navbar__Logo nav__Left'>
            <img src="/src/assets/images/logoPreview.png" alt="logo" />
            <div className='logo__text'>
                <h3>Vege<span>ty</span></h3>
            </div>
        </div>

        <div className='nav__Right'>

            <div className='icons'>
            <BsSearch />
            <HiOutlineShoppingCart />
            <RiMenu3Fill />
            </div>

            <div>
                <button className='navbar__btn' type="button">Book Now</button>
            </div>
            
        </div>
    </div>
    </section>
  )
}

export default Navbar
