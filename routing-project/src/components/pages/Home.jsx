import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { HiHeart } from 'react-icons/hi'
import { MdOutlineStar } from "react-icons/md";

export default function Home() {
    return (
        <>
            <section className='py-[50px]'>



                <div className="max-w-[1320px] mx-auto lg:p-0 p-5 grid gap-[40px] lg:grid-cols-[60%_auto] grid-cols-1  items-center">
                    <div>
                        <h1 className='lg:text-[60px] text-[30px] font-bold'>The experience makes all the difference.
                        </h1>
                        <p className='text-xl mt-4'>From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.

                        </p>
                    </div>
                    <div>
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="" />
                    </div>
                </div>

            </section>
            <section className='py-10'>
                <h2 className='text-[40px] font-bold text-center mb-10'>Shop By Category
                </h2>

                <div className='container mx-auto grid lg:grid-cols-3 grid-cols-1 gap-10'>
                    <div className='relative'>
                        <img src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" className='lg:h-[100%] object-fit-cover' alt="" />
                        <button className='bg-white p-[10px_20px] border-2 absolute bottom-[20px] left-[50%] translate-[-50%] '>Shop Now</button>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <div className='relative'>
                            <img src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" className='w-[100%] lg:h-[400px] object-fit-cover' alt="" />
                            <button className='bg-white p-[10px_20px] border-2 absolute bottom-[20px] left-[50%] translate-[-50%] '>Shop Now</button>
                        </div>
                        <div className='relative'>
                            <img src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" className='w-[100%] lg:h-[400px] object-fit-cover' alt="" />
                            <button className='bg-white p-[10px_20px] border-2 absolute bottom-[20px] left-[50%] translate-[-50%] '>Shop Now</button>
                        </div>
                    </div>
                    <div className='relative'>
                        <img src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" className='lg:h-[100%] object-fit-cover' alt="" />
                        <button className='bg-white p-[10px_20px] border-2 absolute bottom-[20px] left-[50%] translate-[-50%] '>Shop Now</button>
                    </div>
                </div>
            </section>

            <section className='p-10 bg-[#e7ebea]'>
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
                <HiHeart className='text-red-600 text-[30px] absolute right-[10px] top-0' />
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