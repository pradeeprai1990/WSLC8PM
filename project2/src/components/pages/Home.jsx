import React, { use } from 'react'
import "./Home.css" //Link
import logo from "../../assets/react.svg"
import Header from '../common/Header'
export default function Home() {
    let pageTitle = "Home Page"


    let status = false


    let user = ["Ram", "Ravi", "Raj"]

    let allUser=user.map((value,index)=> <li> {index+1} {value} </li> )

    return (

      <> 
      <Header/>
        <div className="mainSection">

            <h1>Discover Solachey</h1>
            <ol>
                 {allUser}
            </ol>
            <ul>
                { user.map((value,index)=> <li> {index+1} {value} </li> ) }
            </ul>


            <ul>
                {
                    user.map((value, index) => {
                        return(
                            <li> {index+1} {value} </li>
                        )
                    })

                }

               
            </ul>

            <div className='productMid'>
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />
                <ProductItems />

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

        </> 
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