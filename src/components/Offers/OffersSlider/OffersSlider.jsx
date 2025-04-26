import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import 'swiper/css';

import SingleOffer from './SingleOffer/SingleOffer.jsx';
import { swiperSettings } from './swiperSettings.js';

const OffersSlider = ({ offers }) => {
    const [isVertical, setIsVertical] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsVertical(window.innerWidth < 700);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Swiper
            slidesPerView={1}
            {...swiperSettings}
        >
            {offers.map((offer, index) => (
                <SwiperSlide key={index}> <SingleOffer offer={offer} isVertical={isVertical}/></SwiperSlide>))}
        </Swiper>
    );
};
export default OffersSlider;