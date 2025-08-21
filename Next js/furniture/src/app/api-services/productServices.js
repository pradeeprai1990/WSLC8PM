import axios  from "axios"

let getProduct=()=>{
    return axios.get('https://dummyjson.com/products')
    .then((res)=>res.data)
    .then((finalRes)=>finalRes.products)
   } 

 export {getProduct}