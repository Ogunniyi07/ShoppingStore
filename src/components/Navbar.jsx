import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const style = 'text-[14px] cursor-pointer ml-[25px] mobile:ml-[12px]';
  return (
    <div className='navbar h-[60px] shadow-md relative z-10'>
        <div className='wrapper pl-[20px] pr-[20px pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0 mobile:mr-[-15px]'>
            {/* Left Div */}
            <div className='left flex flex-1 items-center'>
                <div className='language cursor-pointer text-[16px] mobile:hidden'>En</div>
                <div className="searchInput border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all ">
                    <input className='input outline-none mobile:w-[50%] mobile:mr-[20px]'
                    type='text'/>
                    <FontAwesomeIcon icon={faSearch} className='' style={{fontSize: '16px'}}/>
                </div>
            </div>
            {/* Logo  */}
            <div className='center flex-1 text-center mobile:pl-6'>
                <div className='logo font-bold text-lg mobile:text-sm'>
                   <NavLink to="/">STORE</NavLink>
                </div>
            </div>
            {/* Right div */}
            <div className='right flex flex-1 items-center mr-3 justify-end mobile:flex-[1.5] mobile:justify-center'>
            <NavLink to="/Register"><div className={style}>Register</div></NavLink>
            <NavLink to="/Login"><div className={style}>Sign In</div></NavLink>
            <div className={style}>
            <NavLink to="/Cart"> 
                <FontAwesomeIcon icon={faShoppingCart} fontawesomeiconcontent={2} color='primary'/> 
            </NavLink>      
            </div> 
            </div>
        </div>
    </div>
  )
}

export default Navbar