"use client"
import React, { useState } from 'react'

export default function ProductDetailsView({data}) {

  let [mainImage,setmainImage]=useState(data.thumbnail)  
  let {images}=data // Multiple Image ->Array
  return (
    <div className='max-w-[1320px] mx-auto grid grid-cols-[45%_auto] gap-5 my-5'>
        <div className='border-1 border-[#ccc]'>
            <img width={"100%"} src={mainImage} alt="" />
            <div className='flex gap-3'>
                {
                    images.map((src,index)=>  
                    
                    <img 
                    onClick={(e)=>setmainImage(src)}  
                    className='border-1 border-[#ccc]' 
                    width={"25%"} 
                    src={src} 
                    alt="" /> )
                }
               
            </div>
        </div>
    </div>
  )
}
