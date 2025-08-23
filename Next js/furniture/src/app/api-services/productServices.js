import axios  from "axios"

let getProduct=()=>{
    return axios.get('https://dummyjson.com/products')
    .then((res)=>res.data)
    .then((finalRes)=>finalRes.products)
   } 


  let singleProduct=(id)=>{

     return axios.get(`https://dummyjson.com/products/${id}`)
    .then((res)=>res.data)
    .then((finalRes)=> finalRes )
  
  }
 export {getProduct,singleProduct}