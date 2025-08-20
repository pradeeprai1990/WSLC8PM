import React from 'react'

export default function HomeCollection() {
  return (
    <section className='py-[50px]'>
        <div className='max-w-[1320px] mx-auto grid grid-cols-3 gap-5'>
            <div className='group overflow-hidden relative' >
                <img className='group-hover:scale-125 duration-200' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp" alt="" />
                <div className='absolute left-0 top-0 w-[100%] h-[100%] p-[30px]'>
                   <h3 className='text-[20px]'> Design Creative </h3>

                   <h2 className='text-3xl font-bold'>Chair Collection </h2>  
                </div>
            </div>
             <div className='group overflow-hidden relative' >
                <img className='group-hover:scale-125 duration-200' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp" alt="" />
                <div className='absolute left-0 top-0 w-[100%] h-[100%] p-[30px]'>
                   <h3 className='text-[20px]'> Design Creative </h3>

                   <h2 className='text-3xl font-bold'>Chair Collection </h2>  
                </div>
            </div>
             <div className='group overflow-hidden relative' >
                <img className='group-hover:scale-125 duration-200' src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/home-page/124ad5ba-005d-4b47-a707-a9a87033833a-1670180400.webp" alt="" />
                <div className='absolute left-0 top-0 w-[100%] h-[100%] p-[30px]'>
                   <h3 className='text-[20px]'> Design Creative </h3>

                   <h2 className='text-3xl font-bold'>Chair Collection </h2>  
                </div>
            </div>
        </div>
    </section>
  )
}
