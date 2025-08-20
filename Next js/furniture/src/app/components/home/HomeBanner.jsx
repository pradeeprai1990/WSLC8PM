"use client"
import React from 'react'
import Slider from "react-slick";
export default function HomeBanner() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <section className='overflow-hidden'>
            <Slider {...settings}>
                <div>
                   <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/add8f1ce-ae5a-4d6b-b573-8c208b6745d5-1671388062.jpg" alt="" />
                </div>
                 <div>
                   <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/slider/add8f1ce-ae5a-4d6b-b573-8c208b6745d5-1671388062.jpg" alt="" />
                </div>
               
            </Slider>
        </section>
    )
}
