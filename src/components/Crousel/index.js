// import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './index.css'

const options={
    loop: true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
}
const Crousel = () => {
  return (
    <>
    <OwlCarousel freeDrag className='owl-theme' dots={'false'} loop margin={20} nav items='5.5' center navClass={['fa-solid fa-caret-left','fa-solid fa-caret-right']}{...options}>
        
        <div className='item'>
            <h1>Illustrator</h1>
        </div>
        <div className='item'>
            <h1>Florals</h1>
        </div>
        <div className='item'>
            <h1>Typography</h1>
        </div>
        <div className='item'>
        <h1>Block Prints</h1>
        </div>
        <div className='item'>
            <h1>Photoshop</h1>
        </div>
        <div className='item'>
            <h1>Illustrator</h1>
        </div>
        <div className='item'>
            <h1>Florals</h1>
        </div>
        <div className='item'>
            <h1>Typography</h1>
        </div>
        <div className='item'>
        <h1>Block Prints</h1>
        </div>
        <div className='item'>
            <h1>Photoshop</h1>
        </div>
    </OwlCarousel>
    </>
    
  )
}
export default Crousel