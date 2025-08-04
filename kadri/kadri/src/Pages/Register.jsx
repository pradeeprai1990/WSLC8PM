import React from 'react'
import Header from '../component/Header'

export default function Register() {
  return (
   <>
  
    <div className='max-w-[700px] mx-auto shadow-lg lg:p-5 p-2 border-1 border-gray-300'>

{/* <form class="max-w-sm mx-auto shadow-lg p-5">
  <div class="mb-5">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your email</label>
    <input type="email" id="email" className='w-100 p-3' placeholder="name@flowbite.com" required />
  </div>
  <div class="mb-5">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your password</label>
    <input type="password" id="password" className='w-100 p-3' required />
  </div>
  <div class="flex items-start mb-5">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-black">Remember me</label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form> */}

<form action="">
  <h1 className='p-5 text-3xl font-bold'>Register for a free account</h1>
  <div className='border-t-1 border-gray-300 w-full'>
    <div  className='mt-5 mb-5 font-bold'><label htmlFor="">Email Address</label></div>
    <input className='w-full p-[15px]  border-1 border-gray-300' type="text" placeholder='Enter your Email' />

  </div>
  <div>
    <div  className='mt-5 mb-5 font-bold'><label htmlFor="">Password</label></div>
    <input className='w-full p-[15px] border-1 border-gray-300' type="text"  placeholder='Enter your Password'/>

  </div>
  <span className='font-[12px]'>At least 6 characters</span>
  <div className='rounded-xl mt-3 mb-3'>
  <button className='p-[15px] border-1 bg-blue-500 text-white font-bold rounded-xl'>Sign Up</button>

  </div>
</form>

</div>
<div className='justify-center items-center flex mt-2'>
<h2>I already have an account</h2>

</div>
<div className='justify-center items-center  flex mt-2'>

<h1>This is a product of <span className='font-bold'>Your Company</span></h1>

</div>
   </>
  )
}
