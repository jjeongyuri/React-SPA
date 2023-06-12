import ProductItem from "../components/ProductItem";
import './Home.css';
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay , Navigation} from "swiper";


export default function Home(){
    return(
        <>
        <div id="box01">
        <Swiper navigation={true} 
                modules={[Navigation,Autoplay]} 
                className="mySwiper"
                style={{height:'100vh',
                       "--swiper-navigation-color": "#1c1c1c",
                       "--swiper-pagination-color": "#1c1c1c",}}
                autoplay={{ delay: 2000 }}
                >
        <ul>
           <li>
            <SwiperSlide>
                <img src={"./img/box01_pic01.avif"} alt=""/>
            </SwiperSlide>
           </li>
           <li>
            <SwiperSlide>
                <img src={"./img/box01_pic02.avif"} alt=""/>
            </SwiperSlide>
           </li>
           <li>
            <SwiperSlide>
                <img src={"./img/box01_pic03.avif"} alt=""/>
            </SwiperSlide>
           </li>
        </ul>
        <div className="collection">
                <h2>하일랜드 컬렉션</h2>
                <p>
                    <a href="#">컬렉션 보기</a>
                </p>
            </div>
      </Swiper>
        </div>
        <div id="box02">
            <div>
                <figure>
                    <img src={'./img/box02_pic01.avif'} alt=""/>
                    <figcaption>
                        <p>와일드 아킬리아 코롱</p>
                        <p>
                            <a href="#">더 알아보기</a>
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={'./img/box02_pic02.avif'} alt=""/>
                    <figcaption>
                        <p>와일드 아킬리아 코롱</p>
                        <p>
                            <a href="#">더 알아보기</a>
                        </p>
                    </figcaption>
                </figure>
            </div>
        </div>
        <div id="box03">
            <h2>완벽한 선물</h2>
            <div id="productItem">
                <ProductItem/>
            </div>
        </div>
        </>
    )
}