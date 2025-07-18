import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Header from './common/Header';
import { products } from './Data/productData';

function App() {

  let cname = "WsCubeTech"

  return (
    <>
      <Header
        companyName={cname}
        phone="88888888"
        email={"pradeep.997@gmail.com"}

      />

      <section className='w-[100%] py-10 bg-lime-300'>

        <h1 className='text-center lg:text-[50px] sm:text-[40px] text-[30px] font-bold py-[40px]'>
          Our Product
        </h1>
        <div className='max-w-[1320px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[30px]'>
          {

            products.map((data, index) => {
              return (
                <ProductItems pData={data}  />
              )
            })

          }



        </div>
      </section>

    </>
  )
}

export default App


function ProductItems({pData}) {
  let {title,thumbnail}=pData
  return (
    <div className='bg-white border-2'>
      <img src={thumbnail} alt="" />
      <h3 className='text-center py-3'>
        {title}
      </h3>
      <button className='flex bg-blue-400 p-3 items-center gap-2 mx-auto mb-3'>  Add to Cart <FaCartShopping className='text-yellow-800 text-2xl' />  </button>
    </div>
  )
}
