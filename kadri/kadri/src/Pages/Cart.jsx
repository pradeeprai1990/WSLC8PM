import React from "react";
import Header from "../component/Header";
import { FaArrowLeftLong } from "react-icons/fa6";
// import { Link } from "react-router";
import { Link } from "react-router";
export default function Cart() {
  return (
    <>
     

      <div className="max-w-[1320px] mx-auto m-[52px]">
        <div className="grid lg:grid-cols-[70%_auto] grid-cols-1 mx-auto gap-5 ">
          <div>
            <div className="flex justify-between border-b-1 border-gray-100 mt-4 mb-4 pt-[20px] pb-[20px]">
              <div className="text-3xl font-bold">Shopping Cart</div>
              <div className="flex justify-end text-3xl font-bold">0 Items</div>
            </div>
            <div className="flex justify-between pt-[20px] pb-[20px] ">
              <div> Product Details</div>
              <div>Quantity</div>
              <div>Price</div>
              <div>Total</div>
            </div>
            <div className="items-center flex gap-4"><Link to={'/'}><FaArrowLeftLong color="blue"/></Link>
            <Link to={'/'} className="text-blue-400">Continue Shopping</Link></div>
          </div>
          <div className="border-b-1 border-gray-100">
            <h1 className="border-b-1 border-gray-100 text-3xl pt-[25px] pb-[30px] font-bold">Order Summary</h1>
            <div className="flex justify-between pt-[20px] pb-[20px]">
                <div className="font-bold">Items 0</div>
                <div className="font-bold">Rs. 0</div>
            </div>
            <h1 className="pt-[20px] pb-[20px] font-bold">Shipping</h1>
            <select name="cars" id="cars" className="lg:w-100 w-50">
             <option value="volvo pt-[20px] pb-[20px]">Standard shipping - Rs. 100</option>
            </select> 
            <h1 className="pt-[30px] pb-[20px] font-bold">Promo Code</h1> 
            <input type="text" placeholder="Enter Promo Code" className="p-[10px] lg:w-100 w-50 pt-[20px] pb-[20px]" />
             <div>

            <button className="bg-red-500 text-white p-[10px] mt-5">Apply</button>
                     <div className="flex justify-between pt-[20px] pb-[20px]">
                        <div className="font-bold">Total cost</div>
                        <div className="font-bold">Rs. 0</div>
                     </div>
             </div>
             <button className="lg:p-5 lg:w-100 w-50 bg-[#4F46E5] text-white">Check Out</button>
          </div>
        </div>
      </div>
    </>
  );
}
