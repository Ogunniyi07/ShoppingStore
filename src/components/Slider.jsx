import {React, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {ApiSlides} from '../apifolder/SliderApi'
import './Slider.css'
import { NavLink } from 'react-router-dom';

function Slider() {
  // Usestate hooks

  const[slides] = useState(ApiSlides)
  const[activeSlide, setActiveSlide] = useState(0)

  // Style
    const arrowStyle = 'rounded-full bg-grey flex justify-center items-center shadow-sm hover:cursor-pointer'

     // Right Arrow
     const preSlide = ()=>{
      if(activeSlide === 0){
        setActiveSlide(slides.length - 1)
      }
      else(
        setActiveSlide(activeSlide - 1)
      )
    }

    // Right Arrow
    const nextSlide = ()=>{
      if(activeSlide === slides.length - 1)
      (
        setActiveSlide(0)
      )
      else(
        setActiveSlide(activeSlide + 1)
      )
    }
  return (
    <div className='parentDiv h-[540px] bg-white flex items-center justify-between mobile:hidden'>
        {/* leftarrow div */}
        <div className={arrowStyle}>
          <FontAwesomeIcon icon={faArrowLeft} style={{fontSize : '30px'}} onClick = {preSlide}/>  
        </div> 
        {/* slide div */}
        {slides.map((slide, index) =>{
          if(index === activeSlide){
            return(
              <div className={`wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#0c0c0c] border-10px overflow-hidden relative ` + slide.background}>
          <div className='slide flex items-center justify-center h-[100%]'>
            <div className='forImage flex flex-1 justify-center items-center h-[100%]'>
              <img 
              className='h-[100%] oject-cover'
              src={slide.src} alt='slide'
              />
            </div>
            <div className='des flex flex-col flex-1 place-items-start justify-center  -ml-11'>
              <h2 className='text-[55px]'>{slide.content.h2}</h2>
              <p className='text-[30px]'>{slide.content.p}</p>
              <NavLink to="/CategoryPage"><button className='btn mt-[20px]'>Shop Now</button></NavLink>
            </div>
          </div>
        </div>
            )
          }
        })}
        {/* rightarrow div */}
        <div className={arrowStyle}>
          <FontAwesomeIcon icon={faArrowRight} style={{fontSize : '30px'}} onClick = {nextSlide}/> 
        </div>
    </div>
  )
}

export default Slider;