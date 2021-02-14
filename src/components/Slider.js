import React from 'react'

// import Swiper core and required modules
import SwiperCore, { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import nescafeGold from '../images/nescafe-gold-blend.png'

// install Swiper modules
SwiperCore.use([Navigation]);

export default function Slider() {
    return (
        <Swiper
            slidesPerView={1}
            navigation
            effect="flip"
        >
            <SwiperSlide>
                <div className="slide" style={{height: "60vh", margin: '20vh'}}>
                    <img src={nescafeGold} alt="" width="150"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    )
}
