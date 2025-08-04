import React from 'react'
import Header from '../component/Header'
import { FaArrowRight } from "react-icons/fa";
// import { PiStarThin } from "react-icons/pi";
import { FaHeart } from "react-icons/fa6";
 import { FaStar } from 'react-icons/fa';
export default function Home() {
  return (
    <>
  
    <div className='bg-[#111827]'>
     

      {/* <section className='max-[1320px mx-auto] grid lg:grid-cols-[60%_auto] border-4'>
                
                    <div>
                        <h1>The experience makes all the difference.</h1>
                        <p>From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                    </div>
            


          </section> */}
      <div className='max-w-[1250px] mx-auto lg:p-0 p-5 grid  lg:grid-cols-[50%_auto] grid-cols-1 gap-[40px]   items-center bg-[#111827]'>
        <div className='lg:order-1 order-2'>
          <h1 className='lg:text-[60px] text-[28px] font-bold leading-[1] dark:text-white'>The experience makes all the difference.</h1>
          <p className='text-[18px] mt-4 font-light dark:text-gray-400'>From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
          <div className='flex gap-5 items-center mt-5'>
            <div className='bg-[#EF4444] rounded-xl'><button className='text-white flex items-center p-3 gap-[10px] text-[18px]'>Get started <FaArrowRight /></button></div>
            <div className='rounded-xl'>
              <button className='border-1 border-gray-500/50 p-3 text-uppercase text-[18px] text-white rounded-xl pr-5 pe-5'>Offers</button></div>
          </div>
        </div>
        <div className='lg:order-2 order-1'>
          <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="" />
        </div>

      </div>
        </div>
           <div className='w-full mt-5 mb-5 lg:p-0 p-5'>
              <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
              <div className='w-full relative'>
                <img src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" className='object-center object-cover h-full w-full' alt="" />
                <div className='absolute bottom-0 left-50 top-240'><button className='border-1 pt-4 p-4 pr-5 pe-[25px] bg-[black] text-[white]'>Women</button></div>
              </div>
              <div className='h-full'>
                <div className='h-[550px] relative'> <img src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" className='object-center object-cover h-full w-full' alt="" />
                 <div className='absolute bottom-0 lg:left-50 lg:top-110 left:50 top:50'><button className='border-1 pt-4 p-4 pr-5 pe-[25px] bg-[black] text-[white]'>Shoes</button></div>
                </div>
                <div className='mt-5 h-[500px] relative'><img src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png" className='object-center object-cover h-full w-full'  alt="" />
                  <div className='absolute bottom-0 lg:left-50 lg:top-95 left:100 top:150'><button className='border-1 pt-4 p-4 pr-5 pe-[25px] bg-[black] text-[white]'>Watches</button></div>
                </div>
              </div>
              <div className='relative'>
                <img src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png " className='object-center object-cover h-full w-full'   alt="" />
                <div className='absolute bottom-0 lg:left-50 lg:top-240 left-30 top-170'><button className='border-1 pt-4 p-4 pr-5 pe-[25px] bg-[black] text-[white]'>Accessories</button></div>
              </div>
                 
             </div>
           </div>

<div className=' grid lg:grid-cols-5 grid-cols-1 lg:ps-[50px] lg:pt-[50px]   lg:pr-[50px] p-4 gap-3'>
     

<div className="max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-white  shadow-lg" >
 <div  className='flex justify-end p-5'><div><FaHeart color='red' /></div></div>
    <a href="#">
        <img className="rounded-t-lg" src="https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp" alt="" />
    </a>
    <div className="p-3">
        <a href="#">
            <h5 className="mb-2 text-[16px] font-bold tracking-tight text-gray-900 dark:text-black">Essence Mascara Lash Princess</h5>
        </a>
        <p className="mb-1 font-normal text-gray-700 dark:text-red-800">Rs 9.99</p>
        <p className="mb-1 font-normal text-gray-700">Essence</p>
        <div className='flex justify-between'>
         <div className='flex items-center'>
           <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <span>(2.56)</span>
         </div>
         <div className='mr-3'><button className='rounded border-2 pt-1 pb-1 ps-5 pe-5 bg-[#2563EB] text-[16px] text-white'>ADD</button></div>
        </div>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-white  shadow-lg" >
  <div className='flex justify-end p-5'><FaHeart color='red' /></div>
    <a href="#">
        <img className="rounded-t-lg" src="https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp" alt="" />
    </a>
    <div className="p-3">
        <a href="#">
            <h5 className="mb-2 text-[16px] font-bold tracking-tight text-gray-900 dark:text-black">Red Lipstick</h5>
        </a>
        <p className="mb-1 font-normal text-gray-700 dark:text-red-800">Rs 9.99</p>
        <p className="mb-1 font-normal text-gray-700">Essence</p>
        <div className='flex justify-between'>
         <div className='flex items-center'>
           <div>  <FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <span>(2.56)</span>
         </div>
         <div className='mr-3'><button className='rounded border-2 pt-1 pb-1 ps-5 pe-5 bg-[#2563EB] text-[16px] text-white'>ADD</button></div>
        </div>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-white  shadow-lg" >
  <div className='flex justify-end p-5'><FaHeart color='red' /></div>
    <a href="#">
        <img className="rounded-t-lg" src="https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/thumbnail.webp" alt="" />
    </a>
    <div className="p-3">
        <a href="#">
            <h5 className="mb-2 text-[16px] font-bold tracking-tight text-gray-900 dark:text-black">Red Nail Polish</h5>
        </a>
        <p className="mb-1 font-normal text-gray-700 dark:text-red-800">Rs 9.99</p>
        <p className="mb-1 font-normal text-gray-700">Essence</p>
        <div className='flex justify-between'>
         <div className='flex items-center'>
           <div>  <FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <span>(2.56)</span>
         </div>
         <div className='mr-3'><button className='rounded border-2 pt-1 pb-1 ps-5 pe-5 bg-[#2563EB] text-[16px] text-white'>ADD</button></div>
        </div>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-white  shadow-lg" >
  <div className='flex justify-end p-5'><FaHeart color='red' /></div>
    <a href="#">
        <img className="rounded-t-lg" src="https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp" alt="" />
    </a>
    <div className="p-3">
        <a href="#">
            <h5 className="mb-2 text-[16px] font-bold tracking-tight text-gray-900 dark:text-black">Calvin Klein CK One</h5>
        </a>
        <p className="mb-1 font-normal text-gray-700 dark:text-red-800">Rs 9.99</p>
        <p className="mb-1 font-normal text-gray-700">Essence</p>
        <div className='flex justify-between'>
         <div className='flex items-center'>
           <div>  <FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <span>(2.56)</span>
         </div>
         <div className='mr-3'><button className='rounded border-2 pt-1 pb-1 ps-5 pe-5 bg-[#2563EB] text-[16px] text-white'>ADD</button></div>
        </div>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-white  shadow-lg" >
  <div className='flex justify-end p-5'><FaHeart color='red' /></div>
    <a href="#">
        <img className="rounded-t-lg" src="https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp" alt="" />
    </a>
    <div className="p-3">
        <a href="#">
            <h5 className="mb-2 text-[16px] font-bold tracking-tight text-gray-900 dark:text-black">Dior J'adore</h5>
        </a>
        <p className="mb-1 font-normal text-gray-700 dark:text-red-800">Rs 9.99</p>
        <p className="mb-1 font-normal text-gray-700">Essence</p>
        <div className='flex justify-between'>
         <div className='flex items-center'>
           <div>  <FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <span>(2.56)</span>
         </div>
         <div className='mr-3'><button className='rounded border-2 pt-1 pb-1 ps-5 pe-5 bg-[#2563EB] text-[16px] text-white'>ADD</button></div>
        </div>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-white  shadow-lg" >
  <div className='flex justify-end p-5'><FaHeart color='red' /></div>
    <a href="#">
        <img className="rounded-t-lg" src="https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp" alt="" />
    </a>
    <div className="p-3">
        <a href="#">
            <h5 className="mb-2 text-[16px] font-bold tracking-tight text-gray-900 dark:text-black">Chanel Coco Noir Eau De</h5>
        </a>
        <p className="mb-1 font-normal text-gray-700 dark:text-red-800">Rs 9.99</p>
        <p className="mb-1 font-normal text-gray-700">Essence</p>
        <div className='flex justify-between'>
         <div className='flex items-center'>
           <div>  <FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <span>(2.56)</span>
         </div>
         <div className='mr-3'><button className='rounded border-2 pt-1 pb-1 ps-5 pe-5 bg-[#2563EB] text-[16px] text-white'>ADD</button></div>
        </div>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-white  shadow-lg" >
  <div className='flex justify-end p-5'><FaHeart color='red' /></div>
    <a href="#">
        <img className="rounded-t-lg" src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp" alt="" />
    </a>
    <div className="p-3">
        <a href="#">
            <h5 className="mb-2 text-[16px] font-bold tracking-tight text-gray-900 dark:text-black">Essence Mascara Lash Princess</h5>
        </a>
        <p className="mb-1 font-normal text-gray-700 dark:text-red-800">Rs 9.99</p>
        <p className="mb-1 font-normal text-gray-700">Essence</p>
        <div className='flex justify-between'>
         <div className='flex items-center'>
           <div>  <FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <span>(2.56)</span>
         </div>
         <div className='mr-3'><button className='rounded border-2 pt-1 pb-1 ps-5 pe-5 bg-[#2563EB] text-[16px] text-white'>ADD</button></div>
        </div>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-white  shadow-lg" >
  <div className='flex justify-end p-5'><FaHeart color='red' /></div>
    <a href="#">
        <img className="rounded-t-lg" src="https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp" alt="" />
    </a>
    <div className="p-3">
        <a href="#">
            <h5 className="mb-2 text-[16px] font-bold tracking-tight text-gray-900 dark:text-black">Dior J'adore</h5>
        </a>
        <p className="mb-1 font-normal text-gray-700 dark:text-red-800">Rs 9.99</p>
        <p className="mb-1 font-normal text-gray-700">Essence</p>
        <div className='flex justify-between'>
         <div className='flex items-center'>
           <div>  <FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <span>(2.56)</span>
         </div>
         <div className='mr-3'><button className='rounded border-2 pt-1 pb-1 ps-5 pe-5 bg-[#2563EB] text-[16px] text-white'>ADD</button></div>
        </div>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-white  shadow-lg" >
  <div className='flex justify-end p-5'><FaHeart color='red' /></div>
    <a href="#">
        <img className="rounded-t-lg" src="https://cdn.dummyjson.com/product-images/fragrances/dolce-shine-eau-de/thumbnail.webp" alt="" />
    </a>
    <div className="p-3">
        <a href="#">
            <h5 className="mb-2 text-[16px] font-bold tracking-tight text-gray-900 dark:text-black">Dolce Shine Eau de</h5>
        </a>
        <p className="mb-1 font-normal text-gray-700 dark:text-red-800">Rs 9.99</p>
        <p className="mb-1 font-normal text-gray-700">Essence</p>
        <div className='flex justify-between'>
         <div className='flex items-center'>
           <div>  <FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <span>(2.56)</span>
         </div>
         <div className='mr-3'><button className='rounded border-2 pt-1 pb-1 ps-5 pe-5 bg-[#2563EB] text-[16px] text-white'>ADD</button></div>
        </div>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-white  shadow-lg" >
  <div className='flex justify-end p-5'><FaHeart color='red' /></div>
    <a href="#">
        <img className="rounded-t-lg" src="https://cdn.dummyjson.com/product-images/fragrances/gucci-bloom-eau-de/thumbnail.webp" alt="" />
    </a>
    <div className="p-3">
        <a href="#">
            <h5 className="mb-2 text-[16px] font-bold tracking-tight text-gray-900 dark:text-black">Gucci Bloom Eau de</h5>
        </a>
        <p className="mb-1 font-normal text-gray-700 dark:text-red-800">Rs 9.99</p>
        <p className="mb-1 font-normal text-gray-700">Essence</p>
        <div className='flex justify-between'>
         <div className='flex items-center'>
           <div>  <FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <div><FaStar style={{ color: 'yellow' }} /></div>
          <span>(2.56)</span>
         </div>
         <div className='mr-3'><button className='rounded border-2 pt-1 pb-1 ps-5 pe-5 bg-[#2563EB] text-[16px] text-white'>ADD</button></div>
        </div>
    </div>
</div>




</div>
      </>
  )
}
