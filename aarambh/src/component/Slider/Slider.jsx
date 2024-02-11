import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./Slider.css";
const Slider = () => {
  return (
    <div className='Slider-main'>
      <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='swiperSlider'>Slide 1</SwiperSlide>
      <SwiperSlide className='swiperSlider'>Slide 2</SwiperSlide>
      <SwiperSlide className='swiperSlider'>Slide 3</SwiperSlide>
      <SwiperSlide className='swiperSlider'>Slide 4</SwiperSlide>
      <SwiperSlide className='swiperSlider'>Slide 1</SwiperSlide>
      <SwiperSlide className='swiperSlider'>Slide 2</SwiperSlide>
      <SwiperSlide className='swiperSlider'>Slide 3</SwiperSlide>
      <SwiperSlide className='swiperSlider'>Slide 4</SwiperSlide>
    </Swiper>
    </div>
  )
}

export default Slider
