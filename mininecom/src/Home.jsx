import React, { useEffect, useState } from 'react'

export default function Home() {

    let [products, setProducts] = useState([])

    let getProducts = async () => {
        let data = await fetch(`https://dummyjson.com/products`)
        let finalData = await data.json()
        setProducts(finalData.products)
    }

    
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div>
            <h1 className='text-center text-[40px] py-5 font-bold'>Our Product</h1>
            <div className='max-w-[1320px] mx-auto grid grid-cols-4 gap-5'>
                {
                products.length >= 1
                 ?

                    products.map((items, index) => {
                        return (
                            <div className='shadow-lg'>
                                <img src={items.thumbnail} alt="" />
                                <h3 className='text-center py-3 font-bold'>{items.title}</h3>
                            </div>
                        )
                    })
                
                    :
                    <div>No Data Found</div>

                }

            </div>
        </div>
    )
}
