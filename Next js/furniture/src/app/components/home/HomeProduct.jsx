"use client";
import { useState } from "react";
import { homeFeaturedProduct } from "@/app/api-services/homeServices";
import ProductCard from "@/app/common/ProductCard";

export default function HomeProduct({ productsData }) {
  const [products, setProducts] = useState(productsData);

  const handleCategory = async (category) => {
    let data = await homeFeaturedProduct(category);
    setProducts(data);
  };

  return (
    <div>
     

      {/* Category buttons */}
      <div className="flex justify-center gap-5">
        <button className="btn p-3 bg-red-500" onClick={() => handleCategory("smartphones")}>Smartphones</button>
        <button  className="btn p-3 bg-red-500" onClick={() => handleCategory("laptops")}>Laptops</button>
        <button  className="btn p-3 bg-red-500" onClick={() => handleCategory("fragrances")}>Fragrances</button>
      </div>

      {/* Product list */}
      <div className="max-w-[1320px] mx-auto grid grid-cols-4">
        {products.map((item) => (
          <ProductCard data={item}/>
        ))}
      </div>
    </div>
  );
}