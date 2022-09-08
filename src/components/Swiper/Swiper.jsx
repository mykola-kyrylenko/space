import {React} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import { Pagination, Navigation, Keyboard } from "swiper";
// import fetchDragonData from '../services/dragonApi';
import { v4 as uuidv4 } from 'uuid';


function SwiperInfiniteLoop({flickr_images}) {

  return (
    <>
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      keyboard={true}
      modules={[Pagination, Navigation, Keyboard]}
      className="mySwiper"
    >
        {flickr_images.map((item)=>{
            return <SwiperSlide key={uuidv4()}><img src={item} alt="space shuttle"/></SwiperSlide>
        })}
    </Swiper>
  </>
  )
}

export default SwiperInfiniteLoop;