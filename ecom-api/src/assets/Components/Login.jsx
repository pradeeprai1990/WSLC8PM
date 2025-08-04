import React from 'react'
import Header from '../../Common/Header'

export default function Login() {
  return (
    <>
    <Header></Header>
      <section className='w-full bg-gray-100'>
        <div className='max-w-[800px] grid grid-cols-1 md:grid-cols-[35%_auto] mt-10 mx-auto'>
            <div className='bg-blue-500 text-white mt-15 mb-20 pb-15'>
                    <h1 className='font-bold text-[30px] mt-10 py-5'>K-WD</h1>
                    <p className='text-center text-gray-300 py-8 m-5'>
                        With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the UI design on us!
                    </p>
                    <p className='text-center mt-8'>
                        Don't have an account?
                    </p>
                    <p className='underline underline-offset-1 text-center'>Get Started</p>
                    
                    <p className='mt-8 p-3 mb-12 text-gray-300'>
                    Read our <span className='underline underline-offset-1'> terms         </span> 
                     and <span className='underline underline-offset-1'>conditions</span></p>
            </div>
            <div className='bg-white text-black mt-15 mb-20 pb-15'>
                   <h1 class="mt-10 mx-5 text-start text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Account Login
                  </h1>
                   <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="email" class="text-start block mb-2 text-bold font-medium dark:text-white mx-5 mt-5">Email Address</label>
                        <input type="email" name="email" id="email" class=" mx-5 mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-150 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email Address" required=""/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-start font-medium text-bold dark:text-white mx-5 mt-5">Password</label>
                        <input type="password" name="password" id="password" placeholder="Your Secure Password" class="mx-5 mt-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-150 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                 
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox" class="mx-5 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                       
                            <label for="terms" className="mx-0 font-light text-gray-500 dark:text-gray-300"><a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Remember Me</a></label>
                        </div>
                    </div>
                    <button className='mx-5 flex items-center justify-center gap-2 bg-blue-500 text-white border border-gray-300 rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out hover:bg-gray-100 w-150'>Log in</button>

                    <p className='text-gray-400'>Or Log in with</p>

                    <button className="mx-5 flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-300 rounded-lg px-4 py-2 shadow-md hover:shadow-lg transition duration-300 ease-in-out hover:bg-gray-100 w-150">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" class="w-5 h-5"/>
                    <span>Login with Google</span>
                    </button>
                    <button class="mx-5 flex items-center justify-center gap-2 bg-white text-blue-500 rounded-lg px-4 py-2 shadow-md hover:bg-[#165cdb] transition duration-300 ease-in-out w-150">
                    <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" class="w-5 h-5 text-blue-500"/>
                    <span>Login with Facebook</span>
                    </button>
                </form> 
                </div>

        </div>



            
      </section>
    </>
  )
}
