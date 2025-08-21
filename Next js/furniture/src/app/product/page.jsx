// "use client"
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import ProductFilter from './ProductFilter'
import ProductList from './ProductList'
import axios from 'axios'
import { getProduct } from '../api-services/productServices'

export default async function Products() {

  let product=await getProduct()

//    let [product,setProduct]=useState([])
//    useEffect(()=>{
//         getProduct();
//    },[])
   let pageName="Products"  
  return (
    <div>
         <Breadcrumb pageName={pageName}/>

         <div className='max-w-[1320px] mt-[50px] mx-auto grid grid-cols-[20%_auto] gap-5'>
            <ProductFilter/>
            <ProductList product={product}/>
         </div>
    </div>
  )
}
