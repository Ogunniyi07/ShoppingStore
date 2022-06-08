import { faHeart, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {React, useState} from 'react'
import { NavLink } from 'react-router-dom';



function Product({item}) {

  const [hoverEffect, setHoverEffects] = useState('opacity-0') ;

  const handleHoverEnter = ()=>{
    setHoverEffects('hover:opacity-1 hover:bg-[rgba(0,0,0,0.2)]')
  }
  const handleHoverExit =()=>{
    setHoverEffects('opacity-0')
  }
  const iconStyle = 'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer'


  return (
    <div className='flex flex-1 items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative' onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverExit}>
        <img src={item.src} alt='product_image'/>
        <div className= {`flex items-center justify-center w-[100%] h-[100%] absolute ease-in ` + hoverEffect}>
            {/* Icons */}
          <div className= {iconStyle}>
            <NavLink to="/ProductPage"><FontAwesomeIcon icon={faShoppingCart}/></NavLink>
          </div>
          <div className= {iconStyle}>   
            <FontAwesomeIcon icon={faHeart} /> 
          </div>
          <div className= {iconStyle}>
            <FontAwesomeIcon icon={faSearch}/> 
          </div>
        </div>
    </div>
  )
}

export default Product