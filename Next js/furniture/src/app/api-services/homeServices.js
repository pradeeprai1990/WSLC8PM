import axios  from "axios"

let bannerApi=()=>{
    return axios.get('https://dummyjson.com/products')
    .then(res => res.data)
    .then((finalRes)=>finalRes.products.slice(0,4)); //Promise
}



export {bannerApi}