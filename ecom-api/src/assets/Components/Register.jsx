import React from 'react'
import Header from '../../Common/Header'

export default function Register() {
  return (
    <>
      <Header></Header>
 
      <section class=" bg-white">
        <div class="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
    
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-start text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Register For A Free Account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="text-start block mb-2 text-bold font-medium dark:text-white">Email Address</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email Address" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-start font-medium text-bold dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="Your Secure Password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                 
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <div className='text-start'>
                        <button type="submit" class=" text-start bg-blue-500 text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mx-2">Sign Up</button>
                  </div>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? 
                  </p>
                  <p className='text-sm font-light text-gray-500 dark:text-gray-400'>This is a Product of <span className='font-bold text-black'>Your Company</span> </p>
              </form>
          </div>
      </div>
  </div>
      </section>
    </>
  )
}
