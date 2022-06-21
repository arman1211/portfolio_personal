import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profile1 from '../../img/profile1.jpg'
import profile2 from '../../img/profile2.jpg'
import profile3 from '../../img/profile3.jpg'
import profile4 from '../../img/profile4.jpg'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'

const Testimonial = () => {
    const clients = [
        {
            image: profile1,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est itaque ipsum sunt quibusdam dignissimos repellendus ipsa molestiae fugiat numquam labore, quia tempore aspernatur! Libero voluptates illo molestiae at saepe.'
        },
        {
            image: profile2,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est itaque ipsum sunt quibusdam dignissimos repellendus ipsa molestiae fugiat numquam labore, quia tempore aspernatur! Libero voluptates illo molestiae at saepe.'
        },
        {
            image: profile3,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est itaque ipsum sunt quibusdam dignissimos repellendus ipsa molestiae fugiat numquam labore, quia tempore aspernatur! Libero voluptates illo molestiae at saepe.'
        },
        {
            image: profile4,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam est itaque ipsum sunt quibusdam dignissimos repellendus ipsa molestiae fugiat numquam labore, quia tempore aspernatur! Libero voluptates illo molestiae at saepe.'
        },
    ]
    return (
        <div className="t-wrapper" id='Testomonials'>
            <div className="t-header">
                <span>Clients always get~~</span>
                <span>Exceptional work</span>
                <span>~~From me....</span>
            </div>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    clients.map((client, index) => {
                        return (
                            <SwiperSlide
                                key={index}>
                                <div className="testimonials">
                                    <img src={client.image} alt="" />
                                    <span>{client.review}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default Testimonial