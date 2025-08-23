import axios  from "axios"

let bannerApi=()=>{
    return axios.get('https://dummyjson.com/products')
    .then(res => res.data)
    .then((finalRes)=>finalRes.products.slice(0,4)); //Promise
}

let homeFeaturedProduct=(catName='smartphones')=>{
      return axios.get(`https://dummyjson.com/products/category/${catName}`)
     .then(res => res.data)
     .then((finalRes)=>finalRes.products); //Promise

}


export {bannerApi,homeFeaturedProduct}