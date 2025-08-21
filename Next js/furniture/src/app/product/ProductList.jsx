import React from 'react'
import ProductCard from '../common/ProductCard'

export default function ProductList({product}) {
  return (
    <div className='grid grid-cols-3 gap-5'>
        {product.map((data,index)=><ProductCard key={index} data={data}/>)}
        
    </div>
  )
}
