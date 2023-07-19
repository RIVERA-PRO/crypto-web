import React, { useRef, useEffect } from 'react';
import './Testimonios.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/swiper-bundle.css';
import img1 from '../../img/review/1.jpg';
import img2 from '../../img/review/2.jpg';
import img3 from '../../img/review/3.jpg';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function Testimonios() {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.autoplay.start();
        }
    }, []);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <div className='TestimoniosConatin'>
            <Swiper
                effect='coverflow'
                grabCursor={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                id='swiper_container'
            >
                <SwiperSlide id='SwiperSlide'>
                    <div className='card-scroll'>
                        <img src={img1} alt='img' />
                        <p>
                            "Bitcoin es emocionante porque muestra lo barato que puede ser. Bitcoin es mejor que la moneda porque no
                            tienes que estar físicamente en el mismo lugar y, por supuesto, para transacciones grandes, la moneda puede
                            resultar bastante inconveniente".
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide id='SwiperSlide'>
                    <div className='card-scroll'>
                        <img src={img2} alt='img' />
                        <p>
                            "Bitcoin es emocionante porque muestra lo barato que puede ser. Bitcoin es mejor que la moneda porque no
                            tienes que estar físicamente en el mismo lugar y, por supuesto, para transacciones grandes, la moneda puede
                            resultar bastante inconveniente".
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide id='SwiperSlide'>
                    <div className='card-scroll'>
                        <img src={img3} alt='img' />
                        <p>
                            "Bitcoin es emocionante porque muestra lo barato que puede ser. Bitcoin es mejor que la moneda porque no
                            tienes que estar físicamente en el mismo lugar y, por supuesto, para transacciones grandes, la moneda puede
                            resultar bastante inconveniente".
                        </p>
                    </div>
                </SwiperSlide>

                <div className='swiper-button-prev' onClick={handlePrev}>
                    <FontAwesomeIcon icon={faChevronLeft} className='btn-Next-prev' />
                </div>
                <div className='swiper-button-next' onClick={handleNext}>
                    <FontAwesomeIcon icon={faChevronRight} className='btn-Next-prev' />
                </div>
            </Swiper>
        </div>
    );
}
