import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import sl2 from './2.webp';
import sl3 from './3.webp';
import sl4 from './4.webp';
import sl5 from './5.webp';
import sl6 from './6.webp';
import sl7 from './7.webp';
import sl8 from './8.webp';

import { BookingButton } from '../index.js';
import { buttonAnimation, headerAnimation } from './animations.js';
import css from './Slider.module.css';

const Slider = ({ showModal }) => {
    const slides = [sl2, sl8, sl3, sl5, sl6, sl7, sl4];
    const { t } = useTranslation();
    return (
        <div className={css.slider} id={'top'}>
            <Swiper
                style={{ zIndex: 0 }}
                autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                }}
                effect={'fade'}
                fadeEffect={{
                    crossFade: true,
                }}
                pagination={{
                    clickable: true,
                }}
                autoHeight={true}
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    '@0.50': {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    '@0.60': {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    '@1.00': {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    '@1.25': {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    '@1.50': {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    '@1.80': {
                        slidesPerView: 3,
                        spaceBetween: 0
                    }

                }}
                loop={true}
                modules={[Pagination, Navigation, Autoplay]}
            >
                {
                    slides.map((slide, index) => <SwiperSlide key={index}>
                        <div className={css.slider_image} style={{ backgroundImage: `url(${slide})` }}></div>
                        <div className={css.slider_overlay}></div>
                    </SwiperSlide>)
                }
            </Swiper>
            <div className={css.welcome_wrapper}>
                <motion.h1
                    key={showModal}
                    custom={1}
                    initial={'hidden'}
                    animate={'visible'}
                    variants={headerAnimation}
                >{t('welcome')}
                </motion.h1>
            </div>
            <div className={css.button_wrapper}>
                <motion.div
                    key={showModal}
                    custom={2}
                    initial={'hidden'}
                    animate={'visible'}
                    variants={buttonAnimation}>
                    <BookingButton/>
                </motion.div>
            </div>
        </div>
    );
};

export default Slider;