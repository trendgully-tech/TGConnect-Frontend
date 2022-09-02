// import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './index.css'

const options={
    
    margin:30.32,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:8
        }
    }
}
const Story = () => {
  return (
    <>
    <OwlCarousel freeDrag className='owl-theme' dots={'false'}   nav items='5.5' navClass={['fa-solid fa-caret-left','fa-solid fa-caret-right']}{...options}>
        
        <div className='add-button'>
        <i class="fa-solid fa-plus"></i>
        </div>
        <div className='story-container'>
        <img src="../rectangle.png" alt="story"/>
        </div>
        <div className='story-container'>
        <img src="../rectangle.png" alt="story"/>
        </div>
        <div className='story-container'>
        <img src="../rectangle.png" alt="story"/>
        </div>
        <div className='story-container'>
        <img src="../rectangle.png" alt="story"/>
        </div>
        <div className='story-container'>
        <img src="../rectangle.png" alt="story"/>
        </div>
        <div className='story-container'>
        <img src="../rectangle.png" alt="story"/>
        </div>
        <div className='story-container'>
        <img src="../rectangle.png" alt="story"/>
        </div>
        <div className='story-container'>
        <img src="../rectangle.png" alt="story"/>
        </div>
        <div className='story-container'>
        <img src="../rectangle.png" alt="story"/>
        </div>
    </OwlCarousel>
    </>
    
  )
}
export default Story