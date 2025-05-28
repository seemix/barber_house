import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { BookingButton } from '../index.js';
import { buttonAnimation, headerAnimation } from './animations.js';
import { swiperSettings } from './swiperSettings.js';
import { ALL_SLIDES, slideMapper } from './query.js';
import css from './Slider.module.css';

const Slider = () => {
    const { data } = useQuery(ALL_SLIDES);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    let slides;
    if (data) slides = slideMapper(data);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const getImageForWidth = (slide, sizeSuffix = '-607x1024') => {
        if (windowWidth <= 600) {
            return slide.replace(/(\.[a-z]+)$/i, `${sizeSuffix}$1`);
        }
        return slide;
    };

    const { t } = useTranslation();
    return (
        <div className={css.slider} id={'top'}>
            <Swiper
                preloadImages={false}
                lazy={true}
                initialSlide={0}
                style={{ zIndex: 0 }}
                {...swiperSettings}
            >
                {slides &&
                    slides.map((slide, index) => {
                        const image = getImageForWidth(slide);
                        return (
                            <SwiperSlide key={index}>
                                <div className={css.slider_image} style={{ backgroundImage: `url(${image})` }}/>
                                <div className={css.slider_overlay}/>
                            </SwiperSlide>)
                    })
                }
            </Swiper>
            <div className={css.button_wrapper}>
                <motion.h1
                    custom={1.5}
                    initial={'hidden'}
                    animate={'visible'}
                    variants={headerAnimation}
                >{t('welcome')}
                </motion.h1>
                <motion.div
                    custom={2.5}
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