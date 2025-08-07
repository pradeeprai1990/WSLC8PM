import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function ProductDetails() {

    let { pid } = useParams() //Object -> { pid:3,size:2 }  //
    let [productData, setproductData] = useState(null)
    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${pid}`)
            .then((res) => res.data)
            .then((finalRes) => {
                setproductData(finalRes);

            })
    }, [pid])

    return (
        <div>

            {productData ?
                <>
                    <h1 className='text-4xl font-bold text-center bg-[#ccc] py-5'>
                        {productData.title}
                       
                    </h1>
                    <div className='max-w-[1320px] mx-auto my-10 grid grid-cols-[40%_auto] gap-10 items-center'>
                        <div>
                            <img src={productData.thumbnail} alt="Product Thumbnail" className='w-full h-auto' />
                            <div className='grid grid-cols-3 gap-4 mt-4'>

                                 {productData.images.map((imagePath,index)=>  <img src={imagePath} alt="Product Thumbnail" className='w-full h-auto' /> )}

                               
                              
                            </div>
                        </div>
                        <div>
                            <h2 className='text-2xl font-bold'> {productData.title}</h2>
                            <p className='mt-2'> {productData.description}</p>
                            <p className='mt-2 text-lg font-semibold'>Price: $ {productData.price}</p>
                            <button className='mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>Add to Cart</button>
                            <button className='mt-4 ml-4 px-6 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400'>Buy Now</button>
                            <div className='mt-6'>
                                <h3 className='text-xl font-semibold'>Product Details</h3>
                                <p className='mt-2'>Here you can add more details about the product.</p>
                            </div>
                        </div>
                    </div>
                </>

                :

                'No Data Found'
            }
        </div>
    )
}
