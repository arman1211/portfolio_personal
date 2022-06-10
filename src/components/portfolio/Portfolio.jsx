import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Ecommerce from '../../img/ecommerce.png'
import Hoc from '../../img/hoc.png'
import Sidebar from '../../img/sidebar.png'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <span>Project</span>
            <span>Portfolio</span>
            <Swiper
                className='portfolio-slider'
                spaceBetween={10}
                slidesPerView={2}
                grabCursor={true}
            >
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Hoc} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Hoc} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Sidebar} alt="" />
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Portfolio