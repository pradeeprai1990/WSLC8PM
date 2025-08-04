import React from 'react'
import Header from '../../Common/Header'
import { MdOutlineStar } from 'react-icons/md'
import { HiHeart } from 'react-icons/hi'

export default function MidSection() {
  return (
    <>
            <Header></Header>
          
            <div className="max-w-[1320px] mx-auto lg:p-0 mt-15 p-5 grid gap-[40px] lg:grid-cols-[60%_auto] grid-cols-1  items-center">
                <div>
                    <h1 className='lg:text-[60px] text-[30px] font-extrabold text-start'>The experience makes all the difference.
                    </h1>
                    <p className='text-xl mt-4 text-start text-gray-400'>From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
                    </p>
                    <div className='text-start mx-5'>
                        <button className=' bg-red-700 p-3  rounded-2xl mt-5 text-bold text-[22px] text-white text-bold'>Get Started</button>
                        <button className=' border-1 border-gray-400 p-3  mx-3 rounded-2xl mt-5 text-bold text-[20px] text-bold'>OFFERS</button>
                    </div>
                </div>
                <div>
                    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="" />
                </div>
            </div>

            
            <p className='text-center font-bold text-[30px] mb-10'>Shop By Category</p>


            <div className='container grid lg:grid-cols-3 grid-cols-1 mx-auto gap-6'>
                <div className='relative'>
                    <img src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" className='h-[800px] object-fit-cover'>
                    </img>
                    <button className='bg-white p-[10px_20px] border-1 absolute bottom-[20px] left-[50%] translate-[-50%]'>Women</button>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='relative'>
                         <img src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" className='w-[100%] lg:h-[390px] object-fit-cover'>
                        </img>
                        <button className='bg-white p-[10px_20px] border-1 absolute bottom-[20px] left-[50%] translate-[-50%]'>Shoes</button>
                    </div>
                    <div className='relative'>
                         <img src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png" className='w-[100%] lg:h-[390px] object-fit-cover'>
                        </img>
                        <button className='bg-white p-[10px_20px] border-1 absolute bottom-[20px] left-[50%] translate-[-50%]'>Watches</button>
                    </div>
                </div>
                <div className='relative'>
                    <img src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" className='h-[800px] object-fit-cover'>
                    </img>
                    <button className='bg-white p-[10px_20px] border-1 absolute bottom-[20px] left-[50%] translate-[-50%]'>Accessories</button>
                </div>
            </div>

            <section className='p-10 bg-[#e7ebea] mt-15'>
                <h2 className='text-5xl font-bold text-center mb-10'>Get difference Product</h2>

                <div className='mx-auto grid lg:grid-cols-5 gap-5 sm:grid-cols-2 grid-cols-1'>
                        <ProductItems/>
                        <ProductItems/>
                        <ProductItems/>
                        <ProductItems/>
                        <ProductItems/>
                        <ProductItems/>
                        <ProductItems/>
                        <ProductItems/>
                        <ProductItems/>
                        <ProductItems/>
                        <ProductItems/>
                        <ProductItems/>
                        <ProductItems/>
                        <ProductItems/>
                        <ProductItems/>
                         <ProductItems/>
                        <ProductItems/>
                        <ProductItems/>
                        <ProductItems/>
                        <ProductItems/>
                </div>
            </section>


    </>
  )
}
function ProductItems() {
    return (
        <div className='shadow-lg bg-white'>
            <div className='relative'>
                <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="" />
                <HiHeart className='text-red-600 text-[30px] absolute right-[10px] top-5' />
            </div>
            <div className='p-3'>
                <h3 className='text-[14px] font-bold'>Essence Mascara Lash Princess</h3>
                <h4>Rs 9.99</h4>

                <div className='flex justify-between py-3'>
                    <div className='flex'>
                        <MdOutlineStar className='text-yellow-500' />
                        <MdOutlineStar className='text-yellow-500' />
                        <MdOutlineStar className='text-yellow-500' />
                        <MdOutlineStar className='text-yellow-500' />
                        <MdOutlineStar className='text-yellow-500' />
                    </div>
                    <button>Add</button>
                </div>
            </div>
        </div>
    )
}