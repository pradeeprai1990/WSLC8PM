import React from 'react'
import Header from '../component/Header'
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
export default function Login() {
  return (
    <>
    
       


    <div className='lg:p-[50px] p-5'>
    <div className='max-w-[700px] mx-auto grid lg:grid-cols-[auto_60%] grid-cols-1 shadow-lg item'>
          <div className='items-center justify-center bg-[#3B82F6] p-5'>
               <div>
                <h1  className='items-center justify-center flex text-white text-[36px] font-bold p-5'>K-WD</h1>
               </div>
               <div  className='items-center justify-center text-center flex  text-gray-300 p-5'><p>With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the UI design on us!</p></div>
               <div  className='items-center justify-center text-center flex text-white'><p className='items-center justify-center pt-[30px] text-center flex '>  Don't have an account?</p></div>
               <div  className='items-center justify-center flex text-white '><p className='border-b-1 border-gray-100'>Get Started!</p></div>
               <div  className='items-center justify-center flex text-white  pt-[50px] '><p>Read our <span className='border-b-1 border-gray-100 border-b-gray'>terms</span> and <span className='border-b-1 border-gray-100'>conditions</span></p></div>

          </div>
          <div className='p-3'>
              <form action="">
  <h1 className='lg:pt-3 lg:pb-3 lg:text-3xl text-2xl font-bold'>Account Login</h1>
  <div>
    <div  className='mt-5 mb-5 font-bold'><label htmlFor="">Email Address</label></div>
    <input className='w-full p-[15px]  border-1 border-gray-300' type="text" placeholder='Enter your Email' />

  </div>
  <div>
    <div  className='mt-5 mb-5 font-bold flex justify-between'>
      <div>

      <label htmlFor="">Password</label> 
      </div>
      <div>
       <label htmlFor="">Forgot Password?</label></div>

      </div>
    <input className='w-full p-[15px] border-1 border-gray-300' type="text"  placeholder='Enter your Password'/>

  </div>

<div className='flex gap-[10px]'>
  <div>
  <input type="checkbox" name="" id="" />

  </div>
  <div>
    Remeber me
  </div>
</div>
  
  <div className='rounded-xl mt-3 mb-3'>
  <button className='p-[15px] border-1 bg-blue-500 text-white font-bold  items-center w-full rounded-xl'>Login</button>

  </div>
  <div className='text-center'>or login with
</div>

 <div className='rounded-xl mt-3 mb-3'>
 <button className='p-[8px] flex gap-3 justify-center border-1  text-black font-bold  items-center w-full rounded-xl'> <FaGoogle />Login with Facebook</button>

  </div>
   <div className='rounded-xl mt-3 mb-3 flex '>
    
  <button className='p-[8px] flex gap-3 justify-center border-1  text-black font-bold border-blue-500 items-center w-full rounded-xl'> <FaFacebook color='blue' size={20}/>Login with Facebook</button>

  </div>
</form>
          </div>
        </div>
    </div>

    </>

  )
}
