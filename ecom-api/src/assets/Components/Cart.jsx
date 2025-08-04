import React from 'react'
import Header from '../../Common/Header'
import { Link } from 'react-router'

export default function Cart() {
  return (
    <>
      <Header></Header>

      <section className='p-10 bg-white mt-15 shadow-lg'>
        <div className='grid lg:grid-cols-[60%_auto] grid-cols- gap-10'>
            <div>
                <div className='flex justify-between shadow-lg p-5'>
                    <h1 className='text-start font-bold text-3xl'>Shopping Cart</h1>
                    <h1 className='text-start font-bold text-3xl'>0 Items</h1>              
                </div>
                <div className='flex text-start gap-30 text-[15px] mt-20'>
                    <div className=''>PRODUCT DETAILS</div>
                    <div>QUANTITY</div>
                    <div>PRICE</div>
                    <div>TOTAL</div>
                </div>
                <div className='mt-5 text-start text-blue-700 font-bold'>
                    <Link to="/">Continue Shopping</Link>
                </div>
            </div>
            
            <div>
                <h1 className='text-start font-bold text-3xl mx-2 shadow-lg p-5'>Order Summary</h1>
                <div className='flex mt-20 justify-between font-bold text-[16px]'>
                    <div>ITEMS 0</div>
                    <div>Rs. 0</div>
                </div> 
                <div className='text-start mt-5 font-semibold'>SHIPPING</div> 
                <div className='text-start mt-5'>
                    <form>
                       <select className='w-full p-2'>
                          <option>Standard Shipping - Rs. 100</option>
                       </select>
                    </form>
                </div>
               <div className='text-start mt-5 font-semibold'>PROMO CODE</div> 
                  <div className='mt-5 text-start'>
                    <input type="text" placeholder="Enter Your Code" className='w-full p-2 pb-3 bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'></input>
                  </div>
                  <div className='mt-5 text-start shadow-lg p-3'>
                    <button className='bg-red-500 text-white font-bold p-3 '>APPLY</button>
                  </div>
                  <div className='flex mt-20 justify-between font-bold text-[14px]'>
                    <div>TOTAL COST</div>
                    <div>Rs. 0</div>
                  </div> 
                  <div className='mt-5'>
                      <button className='bg-indigo-500 text-white p-3 w-full'>CHECK OUT</button>
                  </div>
               </div> 
              
        </div>
      </section>
    </>
  )
}
