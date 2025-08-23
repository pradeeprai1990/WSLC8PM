import Image from "next/image";
import HomeBanner from "./components/home/HomeBanner";
import HomeCollection from "./components/home/HomeCollection";
import HomeProduct from "./components/home/HomeProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bannerApi, homeFeaturedProduct } from "./api-services/homeServices";
export default async  function Home() {

  let bannerData=await bannerApi()
  let productsData=await homeFeaturedProduct()
  

  return (
    <>
      <HomeBanner bannerData={bannerData}  />
      <HomeCollection />
      <HomeProduct productsData={productsData}  />
    </>
  );
}
