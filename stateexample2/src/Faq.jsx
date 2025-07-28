import React, { useState } from 'react'
import { faqData } from './data/FaqData'

// FAQ data array


export default function Faq() {

    let [currentQuestion,setCurrentQuestion]=useState(0)

    return (
        <section className='bg-amber-200 py-10'>
            <h1 className='text-center font-bold text-3xl'>FAQs About Leicester Taxi Service</h1>

            <div className='max-w-[1000px] mx-auto mt-5'>
                {currentQuestion}
                {
                    
                    faqData.map((items, index) => {
                        return (
                            <div className='border-1 mb-4' key={index}>
                                <h3 onClick={()=>setCurrentQuestion(items.id)} className='bg-amber-700 cursor-pointer relative text-white text-xl p-2'> {items.question}  <span className='absolute right-3'>  {currentQuestion==items.id ? '-' : '+ ' }  </span> </h3>
                                <p className={` ${currentQuestion==items.id ? 'border-2 p-5' : 'hidden ' }   `}>
                                    
                                     {items.answer}  
                                </p>
                            </div>
                        )
                    })

                }




            </div>

        </section>
    )
}
