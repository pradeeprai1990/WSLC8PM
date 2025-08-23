
import { singleProduct } from '@/app/api-services/productServices';
import Breadcrumb from '@/app/common/Breadcrumb';
import React from 'react'
import ProductDetailsView from './ProductDetails';

export  default async function ProductDetails( data ) {

   let {id}=await data.params; //object { id:5 }

  let productData=await singleProduct(id)

  
 
  return (
     productData && <>
        <Breadcrumb pageName={productData.title} />
        <ProductDetailsView data={productData} />

     </>
  )
}
