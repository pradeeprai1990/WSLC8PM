import React, { useContext, useEffect, useState } from 'react'
import Header from '../../Common/Header'
import axios from 'axios'
import 'react-responsive-pagination/themes/classic-light-dark.css';
import ResponsivePagination from 'react-responsive-pagination';
import { cartContext } from '../../MainContext';
import { useNavigate } from 'react-router';
export default function Product() {
    let [category, setCategory] = useState([])
    let [brand, setBrand] = useState([])
    let [prodcut, setProduct] = useState([])

    let [loading, setLoading] = useState(false)


    //Filter Logic
    let [currentPage, setCurrentPage] = useState(1)
    let [totalPages, setTotalPages] = useState(null)

    let [sorting, setSorting] = useState(null)

    let [categoryfillter, setCategoryfillter] = useState([])
    let [brandFilter, setBrandFilter] = useState([])
    let [priceFilter, setPriceFilter] = useState([null, null])
    let [rating, setRating] = useState(null)


    //["beauty","smartphone"]  = beauty,smartphone


    // let obj={
    //     status:1,
    //     msg:"demo"
    // }

    // console.log(obj,typeof obj)

    // let jsonData=JSON.stringify(obj)  // Object to JSON
    // //String
    // console.log(jsonData,typeof jsonData)

    let getCategories = () => {

        //fetch
        //axios   
        //    let apiFirstRes=await  axios.get(`https://wscubetech.co/ecommerce-api/categories.php`) 
        //     console.log(apiFirstRes.data)
        //Results -> Object ->data

        axios.get('https://wscubetech.co/ecommerce-api/categories.php')
            .then((apiRes) => apiRes.data)
            .then((finalRes) => {
                setCategory(finalRes.data)
            })


    }

    let getBrands = () => {

        //fetch
        //axios   
        //    let apiFirstRes=await  axios.get(`https://wscubetech.co/ecommerce-api/categories.php`) 
        //     console.log(apiFirstRes.data)
        //Results -> Object ->data

        axios.get('https://wscubetech.co/ecommerce-api/brands.php')
            .then((apiRes) => apiRes.data)
            .then((finalRes) => {
                setBrand(finalRes.data)
            })


    }

    let getProducts = () => {

        setLoading(true)
        axios.get(`https://wscubetech.co/ecommerce-api/products.php`, {
            params: {
                page: currentPage,
                limit: 15,
                categories: categoryfillter.toString(),
                brands: brandFilter.toString(),
                price_from: priceFilter[0],
                price_to: priceFilter[1],
                discount_from: '',
                discount_to: '',
                rating: '',
                sorting,
            }
        })
            .then((res) => res.data)
            .then((finalres) => {
                setLoading(false)
                setProduct(finalres.data)
                setTotalPages(finalres.total_pages)
            })
    }

    useEffect(() => {
        getCategories()
        getBrands()

    }, [])

    //Filter
    useEffect(() => {
        getProducts()
    }, [sorting, categoryfillter, brandFilter, priceFilter, rating, currentPage])


    let getAllCheck = (e, stateName, stateFunction) => {
        if (e.target.checked) { //True

            if (!stateName.includes(e.target.value)) {
                //Old Value Copy,new value add
                stateFunction([...stateName, e.target.value])
            }

        }
        else {

            let finalData = stateName.filter((value) => value != e.target.value)
            stateFunction(finalData)

        }
    }

    // let getAllCheckBrand = (e) => {
    //     if (e.target.checked) { //True

    //         if (!brandFilter.includes(e.target.value)) {
    //             //Old Value Copy,new value add
    //             setBrandFilter([...brandFilter, e.target.value])
    //         }

    //     }
    //     else {

    //         let finalData = brandFilter.filter((value) => value != e.target.value)
    //         setBrandFilter(finalData)

    //     }
    // }




    return (
        <div>
            <Header />

            <section className='grid grid-cols-[15%_auto] gap-5 py-[50px]'>
                <aside className='border-1'>
                    <div className='flex justify-center gap-5'>
                        <div> FILTERS </div>
                        <div>CLEAR ALL  </div>
                    </div>
                    <div className='border-1 h-[250px] overflow-y-scroll'>
                        <h3 className='font-bold p-2'>categories</h3>
                        <ul className='p-3'>
                            {category.map((items, index) => {
                                return (
                                    <li className='mb-2' key={index}>
                                        <input type="checkbox"
                                            value={items.slug}
                                            onChange={(e) => getAllCheck(e, categoryfillter, setCategoryfillter)} />

                                        {items.name} </li>

                                )
                            })}

                        </ul>
                    </div>
                    <div className='border-1 h-[250px] overflow-y-scroll'>
                        <h3 className='font-bold p-2'>Brand</h3>
                        <ul className='p-3'>
                            {brand.map((items, index) => {
                                return (
                                    <li className='mb-2' key={index}>
                                        <input type="checkbox" onChange={(e) => getAllCheck(e, brandFilter, setBrandFilter)} value={items.slug} />

                                        {items.name} </li>

                                )
                            })}
                        </ul>
                    </div>
                    <div className='border-1 h-[220px] overflow-y-scroll'>
                        <h3 className='font-bold p-2'>Price</h3>
                        <ul className='p-3'>
                            <li> <input type="radio" onClick={() => setPriceFilter([10, 250])} name='priceFilter' />  Rs. 10 to Rs. 250</li>
                            <li> <input type="radio" name='priceFilter'
                                onClick={() => setPriceFilter([250, 500])}
                            />  Rs. 250 to Rs. 500</li>
                            <li> <input type="radio" name='priceFilter'
                                onClick={() => setPriceFilter([500, 1000])}
                            />  Rs. 500 to Rs. 1000</li>
                            <li> <input type="radio" name='priceFilter'
                                onClick={() => setPriceFilter([1000, 50000])}
                            />  Rs. 1000 to Above</li>
                        </ul>
                    </div>
                    <div className='border-1 h-[220px] overflow-y-scroll'>
                        <h3 className='font-bold p-2'>Rating</h3>
                        <ul className='p-3'>
                            <li> <input type="radio" onClick={() => setRating(4)} name='rating' /> 4★ & above250</li>
                            <li> <input type="radio" onClick={() => setRating(3)} name='rating' /> 3★ & above250</li>
                            <li> <input type="radio" onClick={() => setRating(2)} name='rating' /> 3★ & above250</li>
                            <li> <input type="radio" onClick={() => setRating(1)} name='rating' /> 1★ & above250</li>
                        </ul>
                    </div>
                </aside>
                <div className='p-3'>
                    <div className='flex justify-end'>
                        {sorting}
                        <select className='border-1 p-2' onChange={
                            (e) => setSorting(e.target.value)

                        }>
                            <option> Sort by : Recommended</option>
                            <option value="1">Name : A to Z</option>
                            <option value="2">Name : Z to A</option>
                            <option value="3">Price : Low to High</option>
                            <option value="4">Price : High to Low</option>

                        </select>
                    </div>
                    <div>
                        <div className='grid grid-cols-4 gap-5'>

                            {
                                loading ?
                                    <>
                                        <div class=" rounded-md border border-blue-300 p-4">
                                            <div class="flex animate-pulse space-x-4">
                                                <div class="size-10 rounded-full bg-gray-200"></div>
                                                <div class="flex-1 space-y-6 py-1">
                                                    <div class="h-2 rounded bg-gray-200"></div>
                                                    <div class="space-y-3">
                                                        <div class="grid grid-cols-3 gap-4">
                                                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                                                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                                                        </div>
                                                        <div class="h-2 rounded bg-gray-200"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" rounded-md border border-blue-300 p-4">
                                            <div class="flex animate-pulse space-x-4">
                                                <div class="size-10 rounded-full bg-gray-200"></div>
                                                <div class="flex-1 space-y-6 py-1">
                                                    <div class="h-2 rounded bg-gray-200"></div>
                                                    <div class="space-y-3">
                                                        <div class="grid grid-cols-3 gap-4">
                                                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                                                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                                                        </div>
                                                        <div class="h-2 rounded bg-gray-200"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" rounded-md border border-blue-300 p-4">
                                            <div class="flex animate-pulse space-x-4">
                                                <div class="size-10 rounded-full bg-gray-200"></div>
                                                <div class="flex-1 space-y-6 py-1">
                                                    <div class="h-2 rounded bg-gray-200"></div>
                                                    <div class="space-y-3">
                                                        <div class="grid grid-cols-3 gap-4">
                                                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                                                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                                                        </div>
                                                        <div class="h-2 rounded bg-gray-200"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" rounded-md border border-blue-300 p-4">
                                            <div class="flex animate-pulse space-x-4">
                                                <div class="size-10 rounded-full bg-gray-200"></div>
                                                <div class="flex-1 space-y-6 py-1">
                                                    <div class="h-2 rounded bg-gray-200"></div>
                                                    <div class="space-y-3">
                                                        <div class="grid grid-cols-3 gap-4">
                                                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                                                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                                                        </div>
                                                        <div class="h-2 rounded bg-gray-200"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" rounded-md border border-blue-300 p-4">
                                            <div class="flex animate-pulse space-x-4">
                                                <div class="size-10 rounded-full bg-gray-200"></div>
                                                <div class="flex-1 space-y-6 py-1">
                                                    <div class="h-2 rounded bg-gray-200"></div>
                                                    <div class="space-y-3">
                                                        <div class="grid grid-cols-3 gap-4">
                                                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                                                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                                                        </div>
                                                        <div class="h-2 rounded bg-gray-200"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" rounded-md border border-blue-300 p-4">
                                            <div class="flex animate-pulse space-x-4">
                                                <div class="size-10 rounded-full bg-gray-200"></div>
                                                <div class="flex-1 space-y-6 py-1">
                                                    <div class="h-2 rounded bg-gray-200"></div>
                                                    <div class="space-y-3">
                                                        <div class="grid grid-cols-3 gap-4">
                                                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                                                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                                                        </div>
                                                        <div class="h-2 rounded bg-gray-200"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class=" rounded-md border border-blue-300 p-4">
                                            <div class="flex animate-pulse space-x-4">
                                                <div class="size-10 rounded-full bg-gray-200"></div>
                                                <div class="flex-1 space-y-6 py-1">
                                                    <div class="h-2 rounded bg-gray-200"></div>
                                                    <div class="space-y-3">
                                                        <div class="grid grid-cols-3 gap-4">
                                                            <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                                                            <div class="col-span-1 h-2 rounded bg-gray-200"></div>
                                                        </div>
                                                        <div class="h-2 rounded bg-gray-200"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </>


                                    :
                                    <>
                                        {prodcut.map((items, index) =>

                                            <ProductItems data={items} key={index} />


                                        )}



                                    </>


                            }





                        </div>
                        <ResponsivePagination
                            current={currentPage} //1
                            total={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </div>

                </div>
            </section>

        </div>
    )
}


export function ProductItems({ data }) {

    let  navigate=useNavigate()
    let { cart, setCart } = useContext(cartContext)
    let checkIteminCart = cart.find((item) => item.pid == data.id)
    // let l=[{},{},{},{}] //Find,filter
    let addTocart = () => {
            let cartObj = {
                pid: data.id,
                name: data.name,
                price: data.price,
                image: data.image,
                qty: 1
            }
            setCart([cartObj,...cart])
            
            setTimeout(()=>{
                navigate('/cart')
            },2000)

    }
    return (
        <div className='shadow-lg border-1 pb-2 '>
            <img src={data.image} alt="" />
            <h3 className='font-bold p-2'>
                {data.name}
                <p> Rs {data.price}</p>
            </h3>
            {
                checkIteminCart 
                ?
                <button className='bg-red-500 p-2 block mx-auto'>Delete Cart</button>
                :
                <button onClick={addTocart} className='bg-green-500 p-2 block mx-auto' >Add to Cart</button>
            }
            
        </div>
    )
}