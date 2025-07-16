import React from 'react'
import "./Home.css" //Link
import logo from "../../assets/react.svg"
export default function Home() {
    let pageTitle = "Home Page"
    console.log(pageTitle)

    let status = false


    return (
        <div className="mainSection">

            <h1>Discover Solachey</h1>

            <div className='productMid'>
                    <ProductItems/>
                    <ProductItems/>
                    <ProductItems/>
                    <ProductItems/>
                    <ProductItems/>
                    <ProductItems/>

            </div>


            {/* <img src={logo} alt="" />
            <h1>  {pageTitle} </h1>
            {10 + 20}
            {"Hello"}
            <div className='midSection'>

                {
                status ?
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex a velit accusantium facilis aspernatur rem, dolorum magni, voluptate animi aperiam vel assumenda distinctio. Dolorum non odio accusantium vero soluta iusto.
                    </p>
                    :
                    ''
                }

                {
                    status &&  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex a velit accusantium facilis aspernatur rem, dolorum magni, voluptate animi aperiam vel assumenda distinctio. Dolorum non odio accusantium vero soluta iusto.
                    </p>
                }

                <img src="/images/14.jpg" alt="" />
                <img src="/images/2.jpg" alt="" /> */}
            {/* </div> */}

        </div>
    )
}


export function ProductItems() {
    return (
        <div className='productItems'>
            <img src="https://solachey.com/wp-content/uploads/2025/02/HVAC-Products.png" alt="" />
            <div className='productContent'>

                <h3> HVAC Products  </h3>
            </div>
        </div>
    )
}