import React from 'react'
import { NavLink } from 'react-router-dom'
import Announce from '../components/Announce'
import Counter from '../components/Counter'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

function ProductPage() {
  return (
    <div >
        <Announce/>
        <Navbar/>
        <div className='flex justify-center mobile:flex-col mobile:mt-3 mobile:p-3'>
            <div className='flex flex-1 items-center justify-center'>
              <img src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=164254216" alt="product_image" className='w-[80%] h-[80%] rounded-lg hover:scale-[1.1] ease-in duration-300' />
            </div>
            <div className='flex-[1.3] flex items-start justify-items-start flex-col m-10 mobile:items-center'>
              <h1 className='title text-[40px] mobile:text-[25px]'>Creamy Hoody Original </h1>
              <p className='pr-[4rem] text-justify mt-4 mobile:p-[0]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ad, facilis molestiae dolorem commodi beatae nemo quo minus neque corporis nostrum quod perspiciatis nesciunt fugit. In cumque odio quisquam eius?</p>
              <p className='mt-7 text-3xl'>Price: <b>$70</b></p>

              {/* Color variant */}
              <div className='flex text-2xl mt-7'>
                Colors
                <div className='bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>
                <div className='bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>
                <div className='bg-yellow-400 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]'></div>
              </div>
              <div className='mt-7 text-2xl'>
                Size
                <select className='ml-5 border-2'>
                  <option selected disabled>Select</option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
              <div className='mt-5'>
                <Counter/>
              </div>
              <NavLink to="/Cart"><button className='btn mt-5'>Add to Cart</button></NavLink>
            </div>
        </div>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default ProductPage