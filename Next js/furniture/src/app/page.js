import Image from "next/image";
import HomeBanner from "./components/home/HomeBanner";
import HomeCollection from "./components/home/HomeCollection";
import HomeProduct from "./components/home/HomeProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {

  //Data Call Using API //Props
  //Home Page
  return (
    <>
      <HomeBanner />
      <HomeCollection />
      <HomeProduct />
    </>
  );
}
