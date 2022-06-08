import React from 'react';
import { NavLink } from 'react-router-dom';
function Category({item}) {

  return <div className=' flex-1 m-2 shadow-lg rounded-md overflow-hidden relative'>
      <img src={item.src}  alt='category_image' className='w-[100%]'/>
      <div className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col'>
          <h2 className='text-white font-medium text-[30px] mb-[25px]'>{item.title}</h2> 
          <NavLink to="/CategoryPage"><buttton className='btn'>See more</buttton></NavLink>
      </div>
  </div>
};

export default Category;
