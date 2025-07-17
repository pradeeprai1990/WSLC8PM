import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function App() {


  return (
    <>


      <section className='w-[100%] py-10 bg-lime-300'>
      
        <h1 className='text-center lg:text-[50px] sm:text-[40px] text-[30px] font-bold py-[40px]'>
          Our Product
        </h1>
        <div className='max-w-[1320px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[30px]'>
          
          <div className='bg-white border-2'>
            <img src="https://solachey.com/wp-content/uploads/2024/12/SLY400WFLT-1024x1024.png" alt="" />
            <h3 className='text-center py-3'>LED FLOOD LIGHTS</h3>
            <button className='flex bg-blue-400 p-3 items-center gap-2 mx-auto mb-3'>  Add to Cart <FaCartShopping className='text-yellow-800 text-2xl' />  </button>
          </div>

          <div className='bg-white border-2'>
            <img src="https://solachey.com/wp-content/uploads/2024/12/SLY400WFLT-1024x1024.png" alt="" />
            <h3 className='text-center py-3'>LED FLOOD LIGHTS</h3>
            <button className='flex bg-blue-400 p-3 items-center gap-2 mx-auto mb-3'>  Add to Cart <FaHeart className='text-red-700 text-2xl' />  </button>
          </div>

          <div className='bg-white border-2'>
            <img src="https://solachey.com/wp-content/uploads/2024/12/SLY400WFLT-1024x1024.png" alt="" />
            <h3 className='text-center py-3'>LED FLOOD LIGHTS</h3>
          </div>
          
          <div className='bg-white border-2'>
            <img src="https://solachey.com/wp-content/uploads/2024/12/SLY400WFLT-1024x1024.png" alt="" />
            <h3 className='text-center py-3'>LED FLOOD LIGHTS</h3>
          </div>
          <div className='bg-white border-2'>
            <img src="https://solachey.com/wp-content/uploads/2024/12/SLY400WFLT-1024x1024.png" alt="" />
            <h3 className='text-center py-3'>LED FLOOD LIGHTS</h3>
          </div>
          <div className='bg-white border-2'>
            <img src="https://solachey.com/wp-content/uploads/2024/12/SLY400WFLT-1024x1024.png" alt="" />
            <h3 className='text-center py-3'>LED FLOOD LIGHTS</h3>
          </div>
          <div className='bg-white border-2'>
            <img src="https://solachey.com/wp-content/uploads/2024/12/SLY400WFLT-1024x1024.png" alt="" />
            <h3 className='text-center py-3'>LED FLOOD LIGHTS</h3>
          </div>
          <div className='bg-white border-2'>
            <img src="https://solachey.com/wp-content/uploads/2024/12/SLY400WFLT-1024x1024.png" alt="" />
            <h3 className='text-center py-3'>LED FLOOD LIGHTS</h3>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default App
